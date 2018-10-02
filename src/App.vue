<template lang="pug">
  #app
    //.icon-font.icon-font-baseline-autorenew-24px
    router-view

</template>

<script>
import Vue from 'vue';
import Button from './components/button-simple';

import { store } from './vuex/store';

Vue.component(Button.name, Button);


export default {
  name: 'App',
  store,
  methods: {},
  mounted() {
    Vue.prototype.$loadingProgress = this.$refs.loadingProgress;
  }
};
</script>

<style lang="sass">
@import "./icon-font-dest/iconfont.css"

*
  box-sizing: border-box

body
  margin: 0
  padding: 0

</style>
