<template>
  <div>
    <div v-if="!confirmed">
      <input type="number" v-model="time">
      <button @click="confirmTime">Confirm</button>
    </div>
    <div v-if="confirmed">{{ time }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      time: null,
      confirmed: false
    }
  },
  methods: {
    confirmTime () {
      this.confirmed = true
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
      }
    }
  }
}
</script>
