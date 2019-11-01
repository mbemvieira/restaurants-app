<template>
  <v-card>
    <v-container
      fluid
      grid-list-lg
    >
      <v-layout row wrap>
        <v-flex xs12>
          <v-card color="blue-grey darken-2" class="white--text">
            <v-card-title primary-title>
              <div>
                <div class="headline">{{ value.name }}</div>
                <span>{{ value.status }}</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat dark>Listen now</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    value: Object
  }
}
</script>
