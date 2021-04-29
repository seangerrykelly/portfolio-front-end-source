<template>
    <v-navigation-drawer
        app
        clipped
        expand-on-hover
        permanent
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
        computed: {
            isMobile : function() {
                return !(window.width <= 760);
            },
        },
        data : function () {
            return {
                // components: {
                //     Slide
                // },
                pages: [
                    // {
                    //     name: 'Home',
                    //     to: '/',
                    //     iconName: 'mdi-home'
                    // },
                    // {
                    //     name: 'About Me',
                    //     to: '/about',
                    //     iconName: 'mdi-account'
                    // },
                    {
                        name: 'Resume',
                        to: '/',
                        iconName: 'mdi-file-document'
                    },
                    {
                        name: 'Projects',
                        to: '/projects',
                        iconName: 'mdi-hammer'
                    },
                    {
                        name: "Contact",
                        to: '/contact',
                        iconName: 'mdi-chat'
                    },
                ],
            }
        }
    }
</script>

<style scoped>

</style>