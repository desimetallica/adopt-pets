import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './actions'
import state from './state'
import modules from './modules'
import getters from './getters'

Vue.use(Vuex)
// store variable or object globally for the app and than import in the components

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
  getters
})
