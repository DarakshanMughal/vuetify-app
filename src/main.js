import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import { routes } from './router/index';
import { store } from './store';
import AlertCmp from './shared/Alert.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});


Vue.use(VueRouter);

Vue.config.productionTip = false

Vue.component('app-alert', AlertCmp);

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App),
    created(){
        firebase.initializeApp({
                apiKey: "AIzaSyDSs0Y7dsd5FzQx392LDFa7GDcGv0IlBSQ",
                authDomain: "vue-firebase-b12d2.firebaseapp.com",
                databaseURL: "https://vue-firebase-b12d2.firebaseio.com",
                projectId: "vue-firebase-b12d2",
                storageBucket: "vue-firebase-b12d2.appspot.com",

        });
        firebase.auth().onAuthStateChanged((user) =>{
            if(user){
                this.$store.dispatch('autoSignin', user )
            }
        });
        this.$store.dispatch('loadMeetups')
    }
}).$mount('#app')
