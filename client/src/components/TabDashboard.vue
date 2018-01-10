<!-- Template generated with vue init vuetifyjs/webpack -->

<template>
  <v-app>
    <v-toolbar fixed app>
      <v-icon>lock</v-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container grid-list-md>
        <v-layout row align-center>
          <v-flex xs6>
            <v-card dark class="teal elevation-3">
              <v-card-text class="px-3">Example TL</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card dark class="teal elevation-3">
              <v-card-text class="px-3">Example TR</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row align-center>
          <v-flex xs6>
            <v-card dark class="teal elevation-3">
              <v-card-text class="px-3">Example BL</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card dark class="teal elevation-3">
              <v-card-text class="px-3">Example BR</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer :fixed="fixed " app>
      <span>&copy; 2017 Zach Bauer @ GA</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'TabDashboard',
  data() {
    title: 'Tabulr'
  }
}
</script>

<style>

</style>
