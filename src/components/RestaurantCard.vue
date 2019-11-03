<template>
  <v-card>
    <v-card-title class="headline">{{ value.name || 'N/D' }}</v-card-title>
    <v-card-subtitle>{{ value.status || 'N/D'}}</v-card-subtitle>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon @click="toggleFavorite">
        <v-icon v-if="value.favorite">mdi-star</v-icon>
        <v-icon v-else>mdi-star-outline</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: null
    }
  },
  methods: {
    toggleFavorite() {
      this.$store.dispatch('toggleFavorite', this.value.id)
    }
  }
}
</script>
