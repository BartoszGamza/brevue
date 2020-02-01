<template>
  <div class="methods-menu">
    <h3>Pick your brew method</h3>
    <div class="methods-wrapper">
      <div
        v-for="(method, key) in  methods"
        :key="key"
        class="neumorphic-card method"
        @click="chooseMethod(method)"
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
import { AVAILABLE_METHODS } from '@/lib/constants'

export default {
  data () {
    return {
      methods: AVAILABLE_METHODS()
    }
  },
  methods: {
    ...mapActions(['setMethod']),
    chooseMethod (method) {
      this.setMethod(method)
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
</style>
