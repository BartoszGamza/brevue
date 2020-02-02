<template>
  <div class="methods-menu">
    <div class="heading">Pick your brew method</div>
    <div class="methods-wrapper">
      <div
        v-for="(method, key) in  methods"
        :key="key"
        class="neumorphic-card method"
        @click="chooseMethod(method.name)"
      >
        <img :src="method.icon" />
        <div class="method-name" :style="{color: method.color}">
          {{ method.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { AVAILABLE_METHODS } from '@/recipes/common'

export default {
  data () {
    return {
      methods: AVAILABLE_METHODS()
    }
  },
  methods: {
    ...mapActions(['setDefaultMethod']),
    chooseMethod (method) {
      this.setDefaultMethod(method)
      this.$router.push({name: 'overview'})
    }
  }
}
</script>

<style lang="sass" scoped>
.methods-wrapper
  display: flex
  flex-flow: row-wrap

.method
  border-radius: 10px
  padding: 10px

.method-name
  text-align: center
  margin-top: 20px
  font-size: 1.8rem
</style>
