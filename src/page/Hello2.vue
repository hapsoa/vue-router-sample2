<template lang="pug">
  .hello
    div
    svg(width="100%" height="600px" w)
      circle(v-for="c in circle" v-bind="c")
</template>

<script>

import Vue from 'vue';
import MixinBase from '../components/mixin-base';
import card from '../components/card';
import * as Util from '../util';

// mixin Vue 생명주기와 관련하여 todo 가 있는 경우 사용한다.
// library, util 기능이 필요한 경우에는 mixin이 아닌 prototype 을 사용한다.
Vue.component('card', card);

export default {
  name: 'Hello2',
  mixins: [MixinBase],
  data() {
    return {
      multiply: 1,
      circle: [{
        cx: 100,
        cy: 100,
        r: 50,
        type: 'red',
        data: 'w'
      }, {
        cx: 300,
        cy: 100,
        r: 50,
        type: 'red',
        data: 't'
      }, {
        cx: 500,
        cy: 100,
        r: 50,
        type: 'red',
        data: 'f'
      }],
      testNumber: '10000000',
      msg: 'Welcome to Hanu Vue Template',
      cards: [],
      name: '',
      age: '',
      gender: '',
      testObject: {}
    };
  },
  mounted() {
    for (let i = 0; i < 20; i += 1) {
      this.circle.push({
        cx: 80 * i,
        cy: 0,
        r: 50,
        type: 'red',
        data: 'w'
      });
    }

    setInterval(() => {
      for (let i = 0; i < 20; i += 1) {
        setTimeout(() => {
          this.circle[i].cy = 100;
          this.circle[i].fill = '#cb3745';
        }, 50 * i);
      }
    }, 2000);

    setTimeout(() => {
      setInterval(() => {
        for (let i = 0; i < 20; i += 1) {
          setTimeout(() => {
            this.circle[i].cy = 300;
            this.circle[i].fill = '#e99a2b';
          }, 50 * i);
        }
      }, 2000);
    }, 1000);
  },
  computed: {
    getDisplayText() {
      return `${this.name}은 나이가 ${this.age}인 ${this.gender}입니다;`
    },
    count() {
      return this.$store.state.count;
    },
    getTestObject() {
      return this.testObject;
    },
    getPosition() {
      return {
        left: `${this.posX}px`,
        top: `${this.posY}px`
      };
    }
  }
};
</script>

<style scoped>

</style>
