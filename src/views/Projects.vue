<template>
    <v-content>
        <v-layout></v-layout>
        <v-card flat>
            <v-card-text align="left">
            Most of my projects can be found on my <a href="https://github.com/seangerrykelly">GitHub</a>. Below you can find documentation of projects that
            I think are worthy of showcasing.
            </v-card-text>
        </v-card>
        <v-expansion-panels focusable>
            <v-expansion-panel>
                <v-expansion-panel-header>
                    <p><b>Twitch Clone</b> - React app with a Node backend</p>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-card flat>
                        <v-card-text align="left">
                            This project was developed using the <b><a href="https://dev.twitch.tv/docs/api/">Twitch API</a></b>. I personally use Twitch quite a bit, and 
                            as such, I wanted to work on something that I was interested in, while also furthering my skills with both <b>React</b> and <b>Node</b>.
                            The React application allows users to browse the content available on Twitch, as well as watch live streams, VODs, and clips. The content
                            displayed in the React application is obtained by sending requests to the Node backend environment, which subsequently sends requests to 
                            the Twitch API. I have embedded a short video below that shows a short demonstration of what the application can do as of right now. 
                        </v-card-text>
                        <iframe src="https://drive.google.com/file/d/1ns37G8a_sgR6xyY4mKt5-mGEbTArsTH7/preview" width="640" height="480"></iframe>
                        <v-card-text align="left">
                            I am still actively working on this project, and plan to add many more features in the future, such as a user login, for example, which
                            would allow for a much more personalized experience.
                        </v-card-text>
                        <v-card-text align="left">
                            Please visit the repository on <b><a href="https://github.com/seangerrykelly/twitch-api">GitHub</a></b> for instructions on how to get the 
                            application running in your local environment.
                        </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header>
                    <p><b>Oscillating Objects</b> - C# Script for Game Objects in Unity</p>
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