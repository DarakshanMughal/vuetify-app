import Home from '../components/Home.vue';
import Profile from '../components/User/Profile.vue';
import Meetups from '../components/Meetup/Meetups.vue';
import Meetup from '../components/Meetup/Meetup.vue';
import CreateMeetup from '../components/Meetup/CreateMeetup.vue';
import Signin from '../components/User/Signin.vue';
import Signup from '../components/User/Signup.vue';
import AuthGuard from './auth';


export const routes = [

    {path:'/', name: 'Home', component: Home },
    {path:'/profile', name: 'Profile', component: Profile, beforeEnter: AuthGuard  },
    {path:'/meetups', meetups: 'Meetups', component: Meetups },
    {path:'/meetup/new', name: 'CreateMeetup', component: CreateMeetup, beforeEnter: AuthGuard },
    {path:'/meetup/:id', props: true, name: 'Meetup', component: Meetup },
    {path:'/signin', name: 'Signin', component: Signin },
    {path:'/signup', name: 'Signup', component: Signup }

]