<template>
    <v-container>

        <!--Card-->

        <v-layout row wrap>

            <v-flex x12>

                <v-card max-width="1000" class="mx-auto">

                    <v-container>
                        <v-row dense>

                            <v-col v-for="meetup in meetups" :key="meetup.id" cols="12">
                                <v-card dark>
                                    <div class="d-flex flex-no-wrap ">

                                        <v-avatar class="ma-3" size="200" tile>
                                            <v-img :src="meetup.imageUrl"></v-img>
                                        </v-avatar>

                                        <div>
                                            <v-card-title class="headline" v-text="meetup.title"></v-card-title>

                                            <v-card-subtitle v-text="meetup.date"></v-card-subtitle>

                                            <v-btn class="mt-6" :to="/meetup/ + meetup.id">
                                                <v-icon light class="fas fa-arrow-right"></v-icon>
                                                View Meetup
                                            </v-btn>


                                        </div>
                                    </div>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>

                </v-card>

            </v-flex>

        </v-layout>

    </v-container>
</template>


<script>
    export default {
        computed:{
            meetups(){
                return this.$store.getters.loadedMeetups
            }
        }
    }
</script>