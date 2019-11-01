<template>
  <v-layout>
    <v-flex xs12 sm10 offset-sm1>
      <v-card>
        <v-container
          fluid
          grid-list-lg
        >
          <v-layout row wrap>
            <v-flex xs12>
              <!-- v-for each restaurant -->
              <!-- v-if empty list -->
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
// @ is an alias to /src
// import Restaurants from '@/components/Restaurants.vue'

export default {
  name: 'home',
  // components: {
  //   Restaurants
  // },
  data: () => ({
    search: '',
    restaurants: null
  }),
}
</script>
