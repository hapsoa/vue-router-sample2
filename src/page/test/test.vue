<template lang="pug">
  .test-section(ref="scrollObject" v-on:scroll="scrolled")
    .test-area
      h1 COMPONENT TEST PAGE
      button(@click='addItem') addCard
    .bricks-vue
      .item(v-for="card in cards")
        .image-area
          .image
          .curtain
        .text-area
          .title {{card.title}}
          .desc {{card.desc}}
    loading-progress(ref="loading")
</template>

<script>
import Vue from 'vue';
import Bricks from 'bricks.js';

import loadingProgress from '../../components/loading-progress';

Vue.component(loadingProgress.name, loadingProgress);

let bricksInstance;

export default {
  name: 'test',
  components: { loadingProgress },
  data() {
    return {
      cards: [
        {
          title: 'HELLO',
          desc: 'HELLO'
        },
        {
          title: 'HELLO',
          desc: 'HELLO'
        }
      ],
      bricksUpdating: false,
      isLoadingOpen: false,
      isAddProcessing: false
    };
  },
  methods: {
    addItem() {
      for (let i = 0; i < 10; i += 1) {
        this.cards.push({
          title: `CARD${this.cards.length + 1}`,
          desc: `description ${this.cards.length + 1}`
        });
      }
      this.bricksUpdating = true;
    },
    bricksDone() {
      // console.log('bricks done');
      this.bricksUpdating = false;
    },
    scrolled() {
      // console.log(this.$refs.scrollObject.clientHeight);
      // console.log(this.$refs.scrollObject.scrollTop);
      // console.log(this.$refs.scrollObject.scrollHeight);

      if (this.$refs.scrollObject.clientHeight + this.$refs.scrollObject.scrollTop
        === this.$refs.scrollObject.scrollHeight
        && this.$refs.scrollObject.scrollTop !== 0
        && this.isAddProcessing === false) {
        console.log('end scroll point');
        // 로딩아이콘을 생성한다.
        this.isAddProcessing = true;
        this.$refs.loading.open({ loadingMessage: '' });

        for (let i = 0; i < 500; i += 1) {
          this.addItem();
        }
      }
    }
  },
  beforeUpdate() {
    console.log('before Update!');
  },
  updated() {
    if (this.bricksUpdating) bricksInstance.update();
    console.log(this.isAddProcessing);

    this.$refs.loading.close();
    this.isAddProcessing = false;
  },
  mounted() {
    bricksInstance = Bricks({
      container: '.bricks-vue',
      packed: 'data-packed',
      sizes: [{ columns: 5, gutter: 10 }]
    });
    bricksInstance.pack();
    bricksInstance.on('update', this.bricksDone);
    bricksInstance.on('pack', this.bricksDone);
  }
};
</script>

<style scoped lang="sass">
.test-section
  width: 100%
  height: 100vh
  overflow-y: auto

.bricks-vue
  margin: auto
  width: 1200px

.item
  width: 240px
  background: #fff
  border: solid #eee 1px
  &:hover
    cursor: pointer
    .image-area
      .image
        transform: scale(1.1)
      .curtain
        position: absolute
        top: 0
        background-color: rgba(0, 0, 0, 0.3)
    .text-area
      .title
        color: blue
  &:hover >.image-area
    background-size: 110% auto

  .image-area
    min-height: 200px
    position: relative
    overflow: hidden
    > .image
      background: #d8d8d8 no-repeat
      background-position: center
      background-size: auto 100%
      transition-property: transform
      transition-duration: 1s
    > .curtain
      width: 100%
      height: 100%
  &:nth-child(4n + 0)
    .image
      height: 230px
      background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1vCHpzE07CbYM2fh2hnKw-0zcYFvfqJPZOG-9fvm57WDBZ_bSIw")
  &:nth-child(4n + 1)
    .image
      height: 300px
      background-image: url("http://www.ofmkorea.org/files/attach/images/246/203/047/fbc0329fc0128a502b0241d657aca8bd.gif")
  &:nth-child(4n + 2)
    .image
      height: 250px
      background-image: url("https://images.fineartamerica.com/images-medium-large-5/abstract-art-landscape-metallic-gold-textured-painting-eye-of-the-universe-by-madart-megan-duncanson.jpg")
  &:nth-child(4n + 3)
    .image
      height: 280px
      background-image: url("https://qph.fs.quoracdn.net/main-qimg-fbcdc3b50c098015e7b201c9923ec72c-c")
  .text-area
    text-align: left
    padding: 16px
    .title
      color: #555
      font-weight: 800
      font-size: 24px
      line-height: 2
    .desc
      color: #777
      line-height: 1.35
      font-weight: 500
      font-size: 12px
</style>
