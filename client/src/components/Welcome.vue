<template>
  <v-app id="inspire">
    <v-content>
        <v-container fluid>
            <v-layout column wrap>
              <v-flex md12>
                <v-card color="primary" light>
                  <img src="@/assets/logo.png" alt="VuetifyLogo">
                </v-card>
              </v-flex>
              <v-flex md12>
                <v-card color="secondary" light>
                  <router-link to="posts">View all of the posts!</router-link>
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
