<template lang="pug">
  .hello
    h3 WT?
    .card-group
      template(v-for="card in cards")
        card-t(:cardName="card.name")
</template>

<script>

import Vue from 'vue';
import card from '../components/card';

Vue.component('card-t', card);

export default {
  name: 'Card',
  data() {
    // for (let i = 0; i < 5; i += 1) {
    //   this.cards.push({ name: `name${i}` });
    // }
    return {
      cards: []
    };
  },
  created() {
    console.log(this);

    setTimeout(() => {
      for (let i = 0; i < 5; i += 1) {
        this.cards.push({ name: `name${i}` });
      }
    }, 1000);
  }
};
</script>

<style scoped lang="sass">
.card-group
  display: flex
</style>
