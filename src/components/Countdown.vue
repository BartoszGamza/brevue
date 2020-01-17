<template>
  <div class="wrapper">
    <div class="method-form" v-if="!accepted">
      <p>How much coffe do you want?</p>
      <input id="numberOfcups" type="number" v-model="form.numberOfCups">
      <label for="numberOfcups">cups</label>
      <input id="cupSize" type="number" v-model="form.cupSize">
      <label for="cup">ml each</label>
      <p>Which is {{ waterAmount }}ml </p>
      <button @click="accepted = true">Let's go!</button>
    </div>
    <div class="steps" v-if="accepted && !recipeEnded">
      <p>{{ currentStep.text }}</p>
      <button v-if="!waiting" @click="stepCompleted(currentStep)">Done</button>
      <div v-else>
        <p>now wait: {{ time }}</p>
      </div>
    </div>
    <div v-if="recipeEnded">
      Congratulations, let the remaining water go through and enjoy your coffee!
    </div>
  </div>
</template>

<script>
export default {
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
    coffeAmount () {
      return this.waterAmount * 6 / 100
    },
    recipe () {
      const blooming = this.coffeAmount * 2
      return [
        {
          text: `Grind ${this.coffeAmount}g (${this.coffeAmount / 6} spoons) of coffee,
          boil ${this.waterAmount}ml of water`,
        },
        {
          text: `Pour in ${blooming}g of water.`,
          wait: 30,
        },
        {
          text: 'Pour in 70g of water',
          wait: 20,
        }
      ]
    },
    currentStep () {
      return this.recipe[this.currentStepKey]
    },
    recipeEnded () {
      // intentionally the steps can go 1 more longer than arrays length which marks the finish
      return (this.currentStepKey === (this.recipe.length))
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

<style scoped>
.wrapper {
  display: flex;
  justify-content: center
}

.method-form {
  max-width: 300px;
  display: flex;
  flex-flow: column;
}

.step--inactive {
  display: none;
}

</style>
