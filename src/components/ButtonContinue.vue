<template>
  <div class="button-continue-wrapper">
    <button
      class="neumorphic-card button-continue"
      @click="onClick">
      <div class="button-continue__text">
        <slot>Continue</slot>
      </div>
    </button>
  </div>
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
  height: 5.4rem
  width: 16.4rem
  border: none
  outline: none
  border-radius: 10px
  cursor: pointer

  &__text
    line-height: 5.4rem
    font-size: 1.6rem
    font-family: 'Gilroy-ExtraBold'
    text-transform: uppercase
    color: transparent
    background-color: $color-main
    text-shadow: 2px 2px 3px rgba(255,255,255,0.5)
    background-clip: text
    -webkit-background-clip: text
    -moz-background-clip: text
    &:hover
      background-color: $color-yellow-cta

  &-wrapper
    position: fixed
    margin: auto
    bottom: 5vh
    display: flex
    justify-content: center
    left: 50%
    transform: translate(-50%, 0)
</style>
