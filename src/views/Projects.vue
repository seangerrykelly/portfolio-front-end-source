<template>
    <v-content>
        <v-layout></v-layout>
        <v-expansion-panels focusable>
            <v-expansion-panel>
                <v-expansion-panel-header>
                    <b>Twitch Clone</b>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header>
                    <b>Oscillate Objects - A script for Game Objects in Unity</b>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-card flat>
                        <v-card-text align="left">
                            <p>This script, written in C#, can be placed onto any GameObject in Unity. Once this is done,
                                the Inspector can be used to choose start and end points for the Rotation, Position, and/or Scale values of the object's Transform.
                                Additionally, it can be used to oscillate between different RGB values on the object's material.
                                You can find the repository <a href="https://github.com/seangerrykelly/oscillate">here</a></p>
                        </v-card-text>
                        <v-card flat>
                            <v-card-subtitle><b>Rotation</b></v-card-subtitle>
                            <v-card-text>The script can be used to make an object oscillate between 2 different angles,</v-card-text>
                            <img src="https://media.giphy.com/media/ZncLu0aty38is0csO1/giphy.gif"/>
                        </v-card>
                        <v-card flat>
                            <v-card-subtitle><b>Position</b></v-card-subtitle>
                            <v-card-text>2 different positions,</v-card-text>
                            <img src="https://media.giphy.com/media/2iV6c2QWDlsRULQLvd/giphy.gif"/>
                        </v-card>
                        <v-card flat>
                            <v-card-subtitle><b>Scale</b></v-card-subtitle>
                            <v-card-text>2 different scales,</v-card-text>
                            <img src="https://media.giphy.com/media/qqEL2RSm98pqZDa0JO/giphy.gif"/>
                        </v-card>
                        <v-card flat>
                            <v-card-subtitle><b>Colour</b></v-card-subtitle>
                            <v-card-text>or 2 different sets of RGB values</v-card-text>
                            <img src="https://media.giphy.com/media/mmtGX34Bt9ct1hkZH4/giphy.gif"/>
                        </v-card>
                        <v-card flat>
                            <v-card-subtitle><b>Combination</b></v-card-subtitle>
                            <v-card-text>Once the object has been placed on an object, any and all of the different effects can be applied simulataneously.
                                        You can also set different speed values for each feature if you would like to have an offset between position and rotation, for example.
                            </v-card-text>
                            <img src="https://media.giphy.com/media/21aq2C9cP1myX1zCt8/giphy.gif"/>
                        </v-card>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-content>
</template>

<script>
    export default {
        name: "Projects"
    }
</script>

<style scoped>

</style>