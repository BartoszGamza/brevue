<template>
  <div>
    <div class="preparations-header">
      <div class="heading">
        Preparations
      </div>
      <div class="subtitle-italic">
        Get ready for your brewing, complete the following steps:
      </div>
    </div>

    <div v-for="(step, key) in parsedPreparations"
      :key="key"
      :class="['neumorphic-list-item', { 'neumorphic-list-item--done': step.completed }]"
      @click="changeStepState(key)">
        {{ step.text }}
    </div>

    <div class="continue-wrapper">
      <button-continue>Brew</button-continue>
    </div>
  </div>
</template>

<script>
import ButtonContinue from '@/components/ButtonContinue'
import { mapGetters } from 'vuex'
export default {
  components: {
    ButtonContinue
  },
  data () {
    return {
      parsedPreparations: []
    }
  },
  computed: {
    ...mapGetters(['selectedMethod']),
    preparations () {
      return this.selectedMethod.preparations
    }
  },
  methods: {
    changeStepState (key) {
      this.parsedPreparations[key].completed = !this.parsedPreparations[key].completed
    },
    setPreparations () {
      this.parsedPreparations = this.preparations.map(step => {
        return {
          text: step,
          completed: false
        }
      })
    }
  },
  mounted () {
    this.setPreparations()
  }
}
</script>

<style lang="sass" scoped>
.preparations-header
  display: flex
  justify-items: center
  flex-direction: column
  text-align: center
  margin-bottom: 5rem

.subtitle-italic
  font-size: 1.4rem
  width: 250px
  font-family: 'PT Serif', serif
  font-style: italic
  align-self: center
</style>
