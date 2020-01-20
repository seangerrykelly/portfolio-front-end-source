<template>
    <v-app-bar
          app
          clipped-left
          color="#1E88E5"
          dark="true"
        >
          <div class="d-flex align-center">
            <span class="mr-2">Sean Kelly</span>
          </div>
        <v-app-bar-nav-icon>

        </v-app-bar-nav-icon>

        <v-tabs
                background-color="#1E88E5">
            <v-tab
                to="/"
            >
                Home
            </v-tab>
            <v-tab
            to="/About"
            >
                About Me
            </v-tab>
        </v-tabs>

          <v-spacer></v-spacer>

          <v-btn
            href="https://linkedin.com/in/seangerrykelly"
            target="_blank"
            text
          >
            <span class="mr-2">LinkedIn</span>
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
    </v-app-bar>
</template>

<script>
    export default {
        name: "AppBar"
    }
</script>

<style scoped>

</style>