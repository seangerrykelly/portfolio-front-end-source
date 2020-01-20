<template>
    <v-navigation-drawer
    app
    clipped
    expand-on-hover
    >
        <v-list>
            <v-list-item
                    to="/">
                <v-list-item-action>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "NavDrawer"
    }
</script>

<style scoped>

</style>