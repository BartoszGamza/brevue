<template>
  <svg
    :height="radius * 2"
    :width="radius * 2"
  >
    <circle
      :stroke="color"
      fill="transparent"
      :stroke-dasharray="circumference + ' ' + circumference"
      :style="{ strokeDashoffset }"
      :stroke-width="stroke"
      :r="normalizedRadius"
      :cx="radius"
      :cy="radius"
    />
  </svg>
</template>

<script>
export default {
  props: {
    progress: Number,
  },
  data () {
    return {
      radius: 60,
      stroke: 4,
      color: 'red'
    }
  },
  computed: {
    normalizedRadius () {
      return this.radius - this.stroke * 2;
    },
    circumference () {
      return this.normalizedRadius * 2 * Math.PI;
    },
    strokeDashoffset () {
      return this.circumference - this.progress / 100 * this.circumference;
    }
  }
}
</script>
