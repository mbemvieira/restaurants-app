<template>
  <v-card>
    <!-- TODO: Improve UI -->
    <v-card-title class="headline">{{ value.name || 'N/D' }}
      <v-chip
        class="ma-2"
        color="primary"
        text-color="white"
      >
        {{ sortBy.description || 'N/D' }}:
        {{
          value.sortingValues[sortBy.key] != null
            ? value.sortingValues[sortBy.key]
            : 'N/D'
        }}
      </v-chip>
    </v-card-title>
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
import { mapState } from 'vuex'

export default {
  props: {
    value: {
      type: Object,
      default: null
    }
  },
  computed: {
    ...mapState([
      'sortBy',
    ]),
  },
  methods: {
    toggleFavorite() {
      this.$store.dispatch('toggleFavorite', this.value.id)
    }
  }
}
</script>
