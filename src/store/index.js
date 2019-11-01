import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    restaurants: null
  },
  mutations: {
  },
  actions: {
    get(context) {
      return context
    }
  },
  modules: {
  }
})
