<template>
  <div class="methods-menu">
    <h3>Pick your brew method</h3>
    <div
      v-for="(method, key) in  methods"
      :key="key"
      @click="chooseMethod(method)"
    >
      {{ method }}
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { METHOD_V60 } from '@/lib/constants'

export default {
  data () {
    return {
      methods: [ METHOD_V60 ]
    }
  },
  methods: {
    ...mapActions(['setMethod']),
    chooseMethod (method) {
      this.setMethod(method)
    }
  },
  created () {
    // eslint-disable-next-line no-console
    console.log(METHOD_V60)
  }
}
</script>
