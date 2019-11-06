<template>
  <v-card>
    <v-card-title class="headline">{{ value.name | default('N/D') }}</v-card-title>
    <v-card-subtitle>{{ value.status | capitalize | default('N/D') }}</v-card-subtitle>

    <v-card-text>
      <v-chip
        class="ma-2"
        color="primary"
        text-color="white"
      >
        {{ sortBy.description | default('N/D') }}:
        {{
          value.sortingValues[sortBy.key] != null
            ? value.sortingValues[sortBy.key]
            : 'N/D'
        }}
      </v-chip>
    </v-card-text>

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
  filters: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    default(value, text) {
      return !value ? text : value
    }
  },
  methods: {
    toggleFavorite() {
      this.$store.dispatch('toggleFavorite', this.value.id)
    }
  }
}
</script>
