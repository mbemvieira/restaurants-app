import Vue from 'vue'
import Vuex from 'vuex'
import jsonApi from '../services/json-api'

Vue.use(Vuex)

const getDefaultState = () => ({
  restaurants: null,
  sortBy: 'bestMatch'
})

export default new Vuex.Store({
  state: getDefaultState,
  mutations: {
    setRestaurants(state, { restaurants = null }) {
      state.restaurants = restaurants
    },
    setFavorite(state, { id, restaurant }) {
      const index = state.restaurants.findIndex(el => el.id == id)

      if (index == -1) return;

      state.restaurants.splice(index, 1, restaurant)
    }
  },
  actions: {
    get({ commit }, sortBy = null) {
      jsonApi.get(
        sortBy || 'bestMatch',
        // handle success
        restaurants => commit('setRestaurants', { restaurants }),
        // handle failure
        () => commit('setRestaurants', { restaurants: null })
      )
    },
    toggleFavorite({ commit }, id) {
      commit('setFavorite', { id })
    }
  },
  modules: {
  }
})
