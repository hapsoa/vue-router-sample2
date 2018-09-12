<template lang="pug">
  div.card
    h1 {{ cardName }}
</template>

<script>
export default {
  name: 'card',
  data() {
    return {
    };
  },
  props: {
    cardName: {
      type: String,
      required: true
    }
  },
  mounted() {
    // todo getCard Body
    console.log(this);
  }
};
</script>

<style scoped lang="sass">
.card
  border: solid 1px #ccc
  border-radius: 4px
  width: 200px
  height: 400px
</style>
