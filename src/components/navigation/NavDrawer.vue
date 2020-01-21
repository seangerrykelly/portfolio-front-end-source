<template>
    <v-navigation-drawer
        app
        clipped
        expand-on-hover
    >
        <v-list>
            <v-list-item
                v-for="(page, index) in pages"
                :key="index"
                :to="pages[index].to"
            >
                <v-list-item-action>
                    <v-icon>{{page.iconName}}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>{{page.name}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "NavDrawer",
        data : function () {
            return {
            pages: [
                {
                    name: 'Home',
                    to: '/',
                    iconName: 'mdi-home'
                },
                {
                    name: 'About Me',
                    to: '/about',
                    iconName: 'mdi-account'
                },
                {
                    name: 'Resume',
                    to: '/resume',
                    iconName: 'mdi-file-document-box'
                },
                {
                    name: "Contact",
                    to: '/contact',
                    iconName: 'mdi-chat'
                }
            ],
            }
        }
    }
</script>

<style scoped>

</style>