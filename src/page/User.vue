<template lang="pug">
  div
    hr
    button-simple(:text="'HELLO WORLD'"
    :icon="'fa-user'"
    @click="clickButton0")
    button-simple(:text="'배고파'"
    :icon="'fa-user'"
    :background="'#000'"
    :size="'large'" @click="clickButton1")
    hr
    h3 hello
</template>

<script>
export default {
  name: 'User',
  methods: {
    clickButton0(arg) {
      console.log('00000 button!!', arg);
    },
    clickButton1() {
      console.log('button 01 clicked');
    }
  }
};
</script>

<style scoped>

</style>
