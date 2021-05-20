<template>
  <v-content>
    <v-layout></v-layout>
    <v-card flat>
      <v-card-title>
        <b>Hi,</b>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-text align="left">
        My name is Sean. I am a recent graduate from the Systems Design Engineering program at the University of Waterloo. This is my personal website, which
        serves as a hub for programming and/or design projects I have done. Please use the left-hand sidebar to navigate the website. If you would like to contact me,
        feel free to reach me via email, LinkedIn, or GitHub, all of which are linked in the navigation bar at the top of your screen.
      </v-card-text>

      <v-card-text align="left">
        For those that are curious, I built this website using the Vuetify Material Design Framework for <b>Vue.js</b>. You can find the source on my
        <a href="https://github.com/seangerrykelly/portfolio-front-end-source">GitHub</a>.
      </v-card-text>
      <v-flex xs12>
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
