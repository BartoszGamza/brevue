<template>
  <div id="app">
    <div class="app-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
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
  color: $color-main
  background-color: $color-background
  height: 100vh
  display: flex
  justify-content: center

.app-wrapper
  padding-top: 30px
</style>
