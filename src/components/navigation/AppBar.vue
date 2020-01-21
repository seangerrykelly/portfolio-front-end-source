<template>
    <v-app-bar
          app
          clipped-left
          dark="true"
        >
        <a
        href="/"
        style="text-decoration: none;
                color:#000000"
        >
            <h1 class="display-2 font-weight-bold mb-3">
                Sean Kelly
            </h1>
        </a>
<!--The following gives you the little hamburger info icon (3 lines)-->
        <!--        <v-app-bar-nav-icon>-->

<!--        </v-app-bar-nav-icon>-->

          <v-spacer></v-spacer>

        <v-btn
                href="https://github.com/seangerrykelly"
                icon
        >
            <font-awesome-icon :icon="gitHubIcon"></font-awesome-icon>
        </v-btn>
        <v-btn
            href="https://linkedin.com/in/seangerrykelly"
            icon
        >
            <font-awesome-icon :icon="linkedInIcon"></font-awesome-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
    export default {
        name: "AppBar",
        computed: {
            gitHubIcon() {
                return ['fab', 'github']
            },
            linkedInIcon() {
                return ['fab', 'linkedin-in']
            }
        },
        data : function() {
            return {

            }
        },
    }
</script>

<style scoped>

</style>