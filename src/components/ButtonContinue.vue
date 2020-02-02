<template>
  <button
    class="neumorphic-card button-continue"
    @click="onClick">
    <slot>Continue</slot>
  </button>
</template>

<script>
export default {
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="sass" scoped>
.button-continue
  padding: 1.5rem
  width: 16.4rem
  border: none
  outline: none
  border-radius: 10px
  font-size: 1.6rem
  font-family: 'Gilroy-Light'
  color: $color-main
  cursor: pointer
</style>
