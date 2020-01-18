<template>
  <div id="app">
    <countdown />
  </div>
</template>

<script>
import Countdown from './components/Countdown.vue'

export default {
  name: 'app',
  components: {
    Countdown
  }
}
</script>

<style lang="sass">

body
  margin: 0

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  margin: 0
  text-align: center
  color: $color-main
  background-color: $color-background
  height: 100vh
</style>
