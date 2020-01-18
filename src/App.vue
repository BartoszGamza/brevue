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

@font-face
  font-family: 'Gilroy-ExtraBold'
  src: url('~@/assets/fonts/GilroyExtraBold.woff')

@font-face
  font-family: 'Gilroy-Light'
  src: url('~@/assets/fonts/GilroyLight.woff')

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  margin: 0
  text-align: center
  color: #2c3e50
  // padding-top: 60px
  background-color: #EFEEEE
  height: 100vh
  // width: 100vw
  // height: 100vh
</style>
