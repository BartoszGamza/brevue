import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})

export default store
