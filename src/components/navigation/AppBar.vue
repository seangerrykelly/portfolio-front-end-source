<template>
    <v-app-bar
          app
          clipped-left
          dark="true"
        >
          <div class="d-flex align-center">
            <span class="mr-2">Sean Kelly</span>
          </div>
<!--The following gives you the little hamburger info icon (3 lines)-->
        <!--        <v-app-bar-nav-icon>-->

<!--        </v-app-bar-nav-icon>-->

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