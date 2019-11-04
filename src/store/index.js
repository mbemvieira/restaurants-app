import Vue from 'vue'
import Vuex from 'vuex'
import jsonApi from '../services/json-api'
import { Promise } from 'q'

Vue.use(Vuex)

const getDefaultState = () => ({
  restaurants: null,
  sortBy: null,
  options: [],
  search: null
})

export default new Vuex.Store({
  state: getDefaultState,
  mutations: {
    setRestaurants(state, { restaurants = null }) {
      state.restaurants = restaurants
    },
    setOptions(state, { options = null }) {
      state.options = options != null && Array.isArray(options) ? options : []
      state.sortBy = state.options[0] || null
    },
    setSortBy(state, { sortBy = null }) {
      const exists = state.options.find(el => sortBy.key === el.key)
      state.sortBy = exists || state.options[0] || null
    },
    setSearch(state, { search = null }) {
      state.search = search
    },
  },
  actions: {
    get({ commit, state }) {
      return new Promise((resolve, reject) => {
        const sortKey = state.sortBy != null ? state.sortBy.key : null

        jsonApi.get(
          {
            sortBy: sortKey,
            search: state.search || null
          },
          restaurants => {
            commit('setRestaurants', { restaurants })
            resolve()
          },
          () => {
            commit('setRestaurants', { restaurants: null })
            reject()
          }
        )
      })
    },
    getOptions({ commit }) {
      return new Promise((resolve, reject) => {
        jsonApi.getOptions(
          options => {
            commit('setOptions', { options })
            resolve()
          },
          () => {
            commit('setOptions', { options: null })
            reject()
          }
        )
      })
    },
    toggleFavorite({ dispatch }, id) {
      return new Promise((resolve, reject) => {
        jsonApi.toggleFavorite(
          id,
          () => dispatch('get').then(() => resolve()).catch(() => reject()),
          () => reject()
        )
      })
    }
  },
})
