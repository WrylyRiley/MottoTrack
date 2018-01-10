<template>
  <v-app>
    <router-view>
      <v-content>
        <v-container fluid>
          <v-card color="primary">
            <img src="@/assets/logo.png" alt="VuetifyLogo">
          </v-card>
          <v-card color="secondary">
            Welcome to the Motto Organaizer
          </v-card>
        </v-container>
      </v-content>
    </router-view>
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
