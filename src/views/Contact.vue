<template>
    <v-content>
        <v-layout></v-layout>
        <form
            ref="form"
            action="https://formspree.io/sgkelly@edu.uwaterloo.ca"
            method="POST"
            @submit="onSubmit"
        >
            <v-container>
                <v-card flat>
                    <v-col
                        cols="7">
                        <v-row>
                                <v-text-field
                                    v-model="contact.name"
                                    outlined
                                    label="Name"
                                    name="Name"
                                >
                                </v-text-field>
                        </v-row>
                        <v-row>
                            <v-text-field
                                    v-model="contact.email"
                                    outlined
                                    label="Email Address"
                                    type="email"
                                    name="_replyto"
                                    :rules="[rules.required, rules.email]"
                            >
                            </v-text-field>
                        </v-row>
                        <v-row>
                            <v-textarea
                                    v-model="contact.message"
                                    name="body"
                                    outlined
                                    label="Message"
                                    counter="300"
                                    rows="4"
                                    no-resize
                                    :rules="[rules.required, rules.max, rules.min]"
                            >
                            </v-textarea>
                        </v-row>
                        <v-row justify="end">
                            <v-btn
                                    type="submit"
                                    value="Send"
                            >
                                Submit</v-btn>
                            <input type="hidden" name="_next" value="/contact"/>
                        </v-row>
                        <v-row>
                            <v-list v-if="errors.length">
                                <v-list-item v-for="(error, i) in errors" :key="i">{{error}}</v-list-item>
                            </v-list>
                        </v-row>
                    </v-col>
                </v-card>
            </v-container>
        </form>
    </v-content>
</template>

<script>
    export default {
        name: "contact",
        data () {
            return {
                contact: {
                  name: '',
                  email: '',
                  message: '',
                },
                isSending: false,
                rules: {
                    required: value => !!value || 'Required.',
                    email: value => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        return pattern.test(value) || 'Invalid e-mail.'
                    },
                    min: v => v.length >= 20 || 'Minimum 20 characters',
                    max: v => v.length <= 300 || 'Max 300 characters'
                },
                errors: [],
            }
        },
        methods: {
            onSubmit(evt) {
                if (this.contact.email && this.contact.message) {
                    return true;
                }

                this.errors = [];
                if (!this.contact.email) {
                    this.errors.push('Email Address is a required field.');
                }
                if(!this.contact.message || (this.contact.message.length < 20) || (this.contact.message.length > 300)) {
                    this.errors.push('Message must be between 20 and 300 characters.');
                }
                evt.preventDefault();
            },
        }
    }
</script>

<style scoped>

</style>