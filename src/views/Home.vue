<template>
  <v-row>
    <v-col cols="12">
      <v-combobox
        v-model="select"
        :items="options"
        chips
        label="Filter"
        @change="changeOption($event)"
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
// import sortingValues from '@/models/options'

export default {
  name: 'home',
  components: {
    RestaurantCard
  },
  beforeCreate() {
    this.$store.dispatch('get', null)
  },
  data: () => ({
    search: '',
    select: 'bestMatch',
    options: [
      'bestMatch',
      'newest',
      'ratingAverage',
      'distance',
      'popularity',
      'averageProductPrice',
      'deliveryCosts',
      'minCost',
    ]
  }),
  computed: {
    ...mapState(['restaurants'])
  },
  methods: {
    changeOption(option) {
      this.$store.dispatch('get', option)
    }
  },
}
</script>
