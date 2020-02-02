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
      <div class="text method-form__subtext">
        Which is {{ totalCoffeeProduct }} ml in total.
      </div>
    </div>
    <div class="continue-wrapper">
      <button-continue @click="goToPreparation">Begin</button-continue>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { getMethodClass } from '@/recipes/common'
import ButtonContinue from '@/components/ButtonContinue'

export default {
  components: {
    ButtonContinue
  },
  data () {
    return {
      cups: 2,
      cupSize: 150
    }
  },
  computed: {
    ...mapGetters(['selectedMethodName']),
    methodClass () {
      return getMethodClass(this.selectedMethodName, this.totalCoffeeProduct)
    },
    totalCoffeeProduct () {
      return this.cups * this.cupSize
    }
  },
  methods: {
    ...mapActions(['setMethodClass']),
    goToPreparation () {
      this.setMethodClass(this.methodClass)
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

.method-form__subtext
  margin-top: 1rem

.continue-wrapper
  width: 100%
  text-align: center
  margin-top: 5rem
</style>
