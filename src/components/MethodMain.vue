<template>
  <div class="method-main">

    <div class="method-profile">
      <img
        class="method-icon"
        :src="methodClass.meta.icon"
        :alt="methodClass.meta.name">
      <div
        class="method-name"
        :style="{color: methodClass.meta.color}">
        {{ methodClass.meta.name }}
      </div>
    </div>

    <div class="method-ingredients">
      <div class="heading">Prepare</div>
      <div v-for="(ingredient, key) in methodClass.ingredients"
        :key="key"
        class="neumorphic-list-item">
        {{ ingredient }}
      </div>
    </div>

    <div class="method-form">
      <div class="heading">For</div>
      <div class="text">
        <input
          v-model="cups"
          class="form-input__cups neumorphic-input"
          type="number"
          min="1"
          max="4"
          id="Cups">
        <label for="Cups"> cups </label>
        <input
          v-model="cupSize"
          class="form-input__cupsize neumorphic-input"
          type="number"
          min="100"
          max="500"
          id="CupSize">
        <label for="CupSize"> ml each. </label>
      </div>
      <div class="text">
        Which is {{ total }} ml in total.
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getMethodClass } from '@/recipes/common'

export default {
  data () {
    return {
      cups: 2,
      cupSize: 150
    }
  },
  computed: {
    ...mapGetters(['selectedMethodName']),
    methodClass () {
      const method = getMethodClass(this.selectedMethodName, this.total)
      // eslint-disable-next-line no-console
      console.log(method)
      return method
    },
    total () {
      return this.cups * this.cupSize
    }
  }
}
</script>

<style lang="sass" scoped>
.form-input__cups
  width: 25px

.form-input__cupsize
  width: 40px

.method-profile
  width: 100%
  display: flex
  flex-direction: column
  justify-content: center
  text-align: center

.method-name
  font-family: 'Gilroy-Light'
  font-size: 3.2rem
</style>
