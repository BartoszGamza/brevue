<template>
  <div>
    <!-- DEMO TIMER -->
    <div>
      <div v-if="!confirmed">
        <input type="number" v-model="time">
        <button @click="confirmTime">Confirm</button>
      </div>
      <div v-if="confirmed">{{ time }}</div>
    </div>

    <!-- STEPS POC -->
    <div>
      <div v-for="(step, key) in v60" :key="key" :class="{'step--inactive': !step.current}">
        <p>{{ step.text }}</p>
        <button @click="stepCompleted(step, key)">Done</button>
        <div v-if="step.completed">
          <p>now wait:</p>
          <div>{{ time }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      time: null,
      confirmed: false,
      v60: [
        {
          current: true,
          text: 'Pour in 50g of water.',
          completed: false,
          wait: 20,
          next: 'Pour in 70g of water'
        },
        {
          current: false,
          text: 'Pour in 70g of water',
          wait: 20,
          completed: false,
          next: 'Pour in 80g of water'
        }
      ]
    }
  },
  methods: {
    confirmTime () {
      this.confirmed = true
      this.countdown()
    },
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
        this.confirmed = false
        this.nextStep()
      }
    },
    stepCompleted (step, key) {
      this.v60[key].completed = true
      this.time = step.wait
      this.countdown()
    },
    nextStep () {
      const currentStep = this.v60.findIndex(step => step.current)
      this.v60[currentStep].current = false
      this.v60[currentStep + 1].current = true
    }
  }
}
</script>

<style scoped>
.step--inactive {
  opacity: 0.5;
}
</style>
