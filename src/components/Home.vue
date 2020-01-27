<template>
    <v-container>

        <!--Buttons-->

        <v-layout row wrap class="mb-6">

            <v-flex x12 sm6 class="text-xs-center text-sm-center">
                <v-btn large router to="/meetups" class="success">Explore Meetup</v-btn>
            </v-flex>

            <v-flex x12 sm6 class="text-xs-center text-sm-center">
                <v-btn large router to="/meetup/new" class="success">Organize Meetup</v-btn>
            </v-flex>



        </v-layout>


        <!--Loading spinner-->

        <v-layout row wrap class="mb-6">
            <v-flex x12 class="text-center">
                <v-progress-circular indeterminate color="green" :size="60" v-if="loading"></v-progress-circular>
            </v-flex>
        </v-layout>


        <!--Carousel-->


        <v-layout row wrap>

            <v-carousel>

            <v-carousel-item v-for="meetup in meetups" :src="meetup.imageUrl" :key="meetup.id" @click="onLoadMeetup(meetup.id)">
                <div class="title">
                    {{meetup.title}}
                </div>

            </v-carousel-item>

            </v-carousel>
        </v-layout>

        <v-layout row wrap class="text-center">
            <p>Join our meetup!!!</p>
        </v-layout>





    </v-container>

</template>


<script>
    export default {
        computed:{
          meetups(){
              return this.$store.getters.featuredMeetups
          },
            loading(){
              return this.$store.getters.loading
            }
        },
        methods:{
            onLoadMeetup(id){
                this.$router.push('/meetup/' + id)
            }
        }
    }
</script>


<style scoped>
    .title{
        position: absolute;
        bottom: 50px;
        background-color: rgba(0,0,0,0.5);
        color: white;
    }
</style>