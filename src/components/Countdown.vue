<template>
  <div class="wrapper">
    <div class="method-form" v-if="!accepted">
      <p>How much coffee do you want?</p>
      <input class="input-number" id="numberOfcups" type="number" v-model="form.numberOfCups">
      <label for="numberOfcups">cups</label>
      <input class="input-number" id="cupSize" type="number" v-model="form.cupSize">
      <label for="cup">ml each</label>
      <p>Which is {{ waterAmount }}ml </p>
      <button class="button-continue" @click="accepted = true">Let's go!</button>
    </div>
    <div class="steps" v-if="accepted && !recipeEnded">
      <p>{{ currentStep.text }}</p>
      <button class="button-continue" v-if="!waiting" @click="stepCompleted(currentStep)">
        {{ currentStep.buttonText ? currentStep.buttonText : 'Done' }}
      </button>
      <div v-else>
        <p> {{ currentStep.timerText ? currentStep.timerText : 'wait' }} {{ time }}</p>
        <countdown-circle :progress="countdownProgress"/>
      </div>
    </div>
    <div v-if="recipeEnded">
      Congratulations, let the remaining water go through and enjoy your coffee!
    </div>
  </div>
</template>

<script>
import CountdownCircle from '@/components/CountdownCircle'

export default {
  components: {
    CountdownCircle
  },
  data () {
    return {
      time: null,
      waiting: false,
      accepted: false,
      form: {
        cupSize: 150,
        numberOfCups: 2,
      },
      currentStepKey: 0
    }
  },
  computed: {
    waterAmount () {
      return this.form.numberOfCups * this.form.cupSize
    },
    coffeeAmount () {
      return this.waterAmount * 6 / 100
    },
    recipe () {
      const bloomingPour = parseInt(this.coffeeAmount * 2)
      const secondPour = (0.6 * this.waterAmount) - bloomingPour
      const lastPour = this.waterAmount - secondPour - bloomingPour
      return [
        {
          text: `Grind ${this.coffeeAmount}g (${this.coffeeAmount / 6} spoons) of coffee,
          boil ${this.waterAmount}ml of water (plus some for filter rinsing) the hotter, the better`,
        },
        {
          text: 'Rinse the filter.'
        },
        {
          text: 'Add coffee, remember to drill a little hole in the middle.'
        },
        {
          text: `Pour in ${bloomingPour}g of water.`,
          wait: 35,
        },
        {
          text: 'Swirl the coffe until evenly mixed'
        },
        {
          text: `Pour in ${secondPour}g of water.`,
          buttonText: 'Start pouring',
          timerText: 'finish pouring by',
          wait: 30,
        },
        {
          text: `Pour in ${lastPour}g (remaining) of water. When pouring is done, mix the coffee surface gently with a spoon.`,
          buttonText: 'Start pouring',
          timerText: 'finish pouring by',
          wait: 30,
        },
        {
          text: 'Swirl gently one more time'
        }
      ]
    },
    currentStep () {
      return this.recipe[this.currentStepKey]
    },
    recipeEnded () {
      // intentionally the steps can go 1 more longer than arrays length which marks the finish
      return (this.currentStepKey === (this.recipe.length))
    },
    countdownProgress () {
      if (this.waiting && this.currentStep.wait) {
        return (this.time * 100) / this.currentStep.wait
      }
      return 0
    }
  },
  methods: {
    setTimer (seconds) {
      this.time = seconds
      this.countdown()
    },
    countdown () {
      if (this.time > 0) {
        setTimeout(() => {
          this.time--
          this.countdown()
        }, 1000)
      } else {
        this.waiting = false
        this.nextStep()
      }
    },
    stepCompleted (step) {
      if (step.wait) {
        this.time = step.wait
        this.countdown()
        this.waiting = true
      } else {
        this.nextStep()
      }
    },
    nextStep () {
      if (!this.recipeEnded) {
        this.currentStepKey++
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.wrapper
  display: flex
  justify-content: center
  font-family: 'PT Serif'

.method-form
  max-width: 300px
  display: flex
  flex-flow: column

.step--inactive
  display: none

.input-number
  @include shadow-concave
  height: 35px
  background-color: $color-background-contrast
  border: none
  outline: none
  padding: 0 10px
  -webkit-appearance: none

.button-continue
  @include shadow-convex
  height: 54px
  width: 164px
  font-family: 'Gilroy-Light'
  text-align: center
  text-transform: uppercase
  outline: none
  border: none
  border-radius: 10px
  background-color: $color-background
</style>
