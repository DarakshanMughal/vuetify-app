<template>
  <v-app>

    <!--Side Drawer-->

    <v-navigation-drawer temporary v-model="drawer" app>

      <v-list>
        <v-list-item link v-for="menu in menuItems" :key="menu.title" :to="menu.link">

          <v-list-item-action>
            <v-icon>{{menu.icon}}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{menu.title}}</v-list-item-title>
          </v-list-item-content>

        </v-list-item>

        <!--Logout List Button-->

        <v-list-item v-if="userIsAuthenticated" @click="onLogout">

          <v-list-item-action>
            <v-icon class="fas fa-sign-out-alt"></v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>


        </v-list-item>



      </v-list>
    </v-navigation-drawer>


    <!--Navigation bar-->


    <v-card class="overflow-hidden">
      <v-app-bar  app
              absolute
              color="#fcb69f"
              dark
              shrink-on-scroll
              src="./assets/forest.jpg"
              scroll-target="#scrolling-techniques-2"
      >
        <template v-slot:img="{ props }">
          <v-img
                  v-bind="props"
                  gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>

        <v-toolbar-title><router-link to="/" tag="span" style="cursor: pointer">Dev App</router-link></v-toolbar-title>

        <v-spacer></v-spacer>

          <v-btn class="hidden-sm-and-down" text small v-for="menu in menuItems" :key="menu.title" :to="menu.link">
            <v-icon>{{menu.icon}}</v-icon>{{menu.title}}</v-btn>

        <!--Logout Button-->

        <v-btn class="hidden-sm-and-down" text small v-if="userIsAuthenticated" @click="onLogout">
          <v-icon class="fas fa-sign-out-alt" ></v-icon>Logout</v-btn>

      </v-app-bar>





      <v-sheet id="scrolling-techniques-2" class="overflow-y-auto" height="auto">

        <v-container style="height: auto;">

          <v-content>

            <router-view></router-view>

          </v-content>

        </v-container>
      </v-sheet>
    </v-card>



  </v-app>
</template>

<script>



export default {
  name: 'App',


  data: () => ({
    drawer: false,
  }),

    computed:{
      menuItems(){
          let menuItems = [
              {icon: 'fas fa-user-friends', title:'Sign in', link:'/signin'},
              {icon: 'fas fa-user-friends', title:'Sign up', link:'signup'}
          ]
          if(this.userIsAuthenticated) {
              menuItems = [
                  {icon: 'fas fa-user-friends', title:'View', link: '/meetups'},
                  {icon: 'fas fa-user-friends', title:'Organize', link:'/meetup/new'},
                  {icon: 'fas fa-user-friends', title:'Profile', link:'profile'},
              ]
          }
          return menuItems
      },

        userIsAuthenticated(){
          return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }

    },

    methods:{
      onLogout(){
          this.$store.dispatch('logout')
      }
    }
};
</script>
