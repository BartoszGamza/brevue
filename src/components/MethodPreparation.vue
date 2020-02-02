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

    <div class="preparations-list">
      <div></div>
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
  computed: {
    ...mapGetters(['selectedMethod'])
  }
}
</script>

<style lang="sass" scoped>
.preparations-header
  display: flex
  justify-content: center
  flex-direction: column
  text-align: center

.subtitle-italic
  font-size: 1.4rem
  width: 250px
  font-family: 'PT Serif', serif
  font-style: italic
</style>
