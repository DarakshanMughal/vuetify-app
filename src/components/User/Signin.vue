<template>
    <v-container>

        <v-layout row wrap>

            <v-flex x12>

                <v-card class="mx-auto pa-6" max-width="400">

                    <app-alert v-if="error" @dismissed="onDismissed" :text="error.message"></app-alert>

                    <div>
                        <h1>Sign in Page</h1>
                    </div>

                    <form @submit.prevent="onSignin">
                        <v-text-field
                                v-model="email"
                                label="Email"
                                required
                        ></v-text-field>

                        <v-text-field
                                v-model="password"
                                label="password"
                                required
                        ></v-text-field>

                        <v-btn class="primary mr-4" type="submit">Sign in</v-btn>

                    </form>
                </v-card>

            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            email: '',
            password: '',
        }),
        computed:{
            user(){
                return this.$store.getters.user
            },
            error(){
                return this.$store.getters.error
            },
            loading(){
                return this.$store.getters.loading
            }
        },

        watch:{
            user(value){
                if(value !== null && value !== undefined){
                    this.$router.push('/')
                }
            }

        },
        methods:{
            onSignin(){
                this.$store.dispatch('signUserIn', {email: this.email, password:this.password})
            },
            onDismissed(){
                this.$store.dispatch('clearError')
            }
        }
    }

</script>