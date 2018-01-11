<template>
  <v-app id="inspire">
    <v-toolbar color="indigo" dark fixed app>
      <v-icon>home</v-icon>
      <v-toolbar-title>Motto Tracker</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container grid-list-md text-sm-center fluid>
        <v-layout column wrap>
          <v-flex md12>
            <v-card color="primary" light>
              <img src="@/assets/logo.png" alt="VuetifyLogo">
            </v-card>
          </v-flex>
          <v-flex md12>
            <v-card color="secondary" dark>
              <router-link to="posts"><h1>View all of the posts!</h1></router-link>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'Welcome',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
