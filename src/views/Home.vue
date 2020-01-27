<template>
  <v-content>
    <v-layout></v-layout>
    <v-card flat>
      <v-card-title>
        <b>COMING SOON</b>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-flex xs12>
        <v-img
                :src="require('../assets/profile photo.png')"

                class="my-3"
                contain
                height="200"
        ></v-img>
      </v-flex>
    </v-card>
  </v-content>
</template>

<script>

export default {
  name: 'home',
  components: {
  }
}
</script>
