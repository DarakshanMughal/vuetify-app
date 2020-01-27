<template>
    <v-container>


        <v-layout row wrap>

            <v-flex x12>

                <h2>Create Meetup Page</h2>

                <form @submit.prevent="onCreateMeetup">
                    <v-text-field
                            v-model="title"
                            label="Title"
                            required
                    ></v-text-field>

                    <v-text-field
                            v-model="location"
                            label="Location"
                            required
                    ></v-text-field>

                    <v-file-input show-size counter multiple label="Upload your image" v-model="file" @change="onFilePicked">

                    </v-file-input>

                     <!--This is for date-->

                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-menu
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="290px"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-text-field
                                            v-model="date"
                                            label="Select your date"
                                            readonly
                                            v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="date"></v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-spacer></v-spacer>
                    </v-row>

                    <img :src="imageUrl" height="300" width="600">

                    <v-text-field
                            v-model="description"
                            label="Description"
                            required
                    ></v-text-field>

                    <v-btn class="primary mr-4" :disabled="!formIsValid" type="submit">submit</v-btn>
                </form>

            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            title: '',
            location: '',
            imageUrl:'',
            description: '',
            date:'',
            image: null,
            file:''
        }),

        methods:{
            onCreateMeetup(){
                if(!this.formIsValid){
                    return
                }
                if(!this.image){
                    return
                }
//                console.log('image', this.image.name)
                const meetupData = {
                    title: this.title,
                    location:this.location,
                    image:this.image,
                    description:this.description,
                    date: this.date
            }
                this.$store.dispatch('createMeetup', meetupData);
                this.$router.push('/home');

            },
            onFilePicked(){
                console.log(this.file)
                const file = this.file
                let filename = file[0].name
                if(filename.lastIndexOf('.') <= 0){
                    return alert('Please add a valid file!')
                }
                const fileReader = new FileReader()
                fileReader.addEventListener('load', ()=>{
                    this.imageUrl = fileReader.result
                })
                fileReader.readAsDataURL(file[0])
                this.image = file[0]

            }

        },

        computed:{
            formIsValid(){
                return this.title !== '' && this.location !== '' && this.imageUrl !== '' && this.description !== ''
            },


        }
    }
</script>

