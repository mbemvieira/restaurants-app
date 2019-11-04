<template>
  <v-row>
    <v-col cols="6" sm="12">
      <v-text-field
        label="Search"
        append-icon="mdi-magnify"
        v-model="search"
      ></v-text-field>
    </v-col>

    <v-col cols="6" sm="12">
      <v-combobox
        v-model="sortBy"
        :items="options"
        chips
        label="Filter"
        item-value="key"
        item-text="description"
      ></v-combobox>
    </v-col>

    <template v-if="restaurants && restaurants.length > 0">
      <v-col
        cols="12"
        v-for="(restaurant, index) in restaurants"
        :key="index"
      >
        <RestaurantCard v-model="restaurants[index]"/>
      </v-col>
    </template>

    <template v-else>
      <v-col cols="12">
        <span>No restaurants found!</span>
      </v-col>
    </template>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
import RestaurantCard from '@/components/RestaurantCard.vue'

export default {
  name: 'home',
  components: {
    RestaurantCard
  },
  beforeCreate() {
    this.$store.dispatch('getOptions')
    this.$store.dispatch('get')
  },
  computed: {
    ...mapState([
      'restaurants',
      'options',
    ]),
    sortBy: {
      get() {
        return this.$store.state.sortBy
      },
      set(value) {
        this.$store.commit('setSortBy', { sortBy: value })
        this.$store.dispatch('get')
      }
    },
    search: {
      get() {
        return this.$store.state.search
      },
      set(value) {
        this.$store.commit('setSearch', { search: value })
        this.$store.dispatch('get')
      }
    },
  },
}
</script>
