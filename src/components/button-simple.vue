<template lang="pug">
  .button(v-bind:style="getButtonStyle"
  v-bind:size="size"
  v-on:click="click")
    .text {{ text }}
    .icon {{ icon }}
</template>

<script>
export default {
  name: 'button-simple',
  computed: {
    getButtonStyle() {
      return {
        background: this.background,
        color: this.color
      };
    }
  },
  props: {
    size: {
      type: String,
      default: 'small'
    },
    text: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    background: {
      type: String,
      default: '#fa0'
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  data() {
    return {};
  },
  methods: {
    click() {
      // console.log('clicked!');
      this.$emit('click', 'wtwt?');
    }
  },
  mounted() {
  }
};
</script>

<style scoped lang="sass">
  .button
    padding: 12px
    &[size=small]
      padding: 8px
      font-size: 12px
    &[size=large]
      padding: 16px
      font-size: 20px
</style>
