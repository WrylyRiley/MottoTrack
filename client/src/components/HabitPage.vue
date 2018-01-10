<!-- Template generated with vue init vuetifyjs/webpack -->

<template>
  <v-app>
    <v-navigation-drawer fixed :clipped="clipped" v-model="drawer" app>
      <v-list>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container grid-list-md>
        <v-layout row align-center v-for="habit in habits" :key="habit">
          <v-flex xs3>
            <v-card dark color="primary">
              <v-card-text class="px-3 ">{{habit.name}}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs1 v-for="i in 9" :key="i">
            <v-card dark color="secondary" class="text-xs-center " ripple @click=" ">
              <v-card-text>He</v-card-text>
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
import PostService from '@/services/PostService'

export default {
  data () {
    return {
      clipped: true,
      drawer: true,
      fixed: true,
      items: [{ icon: 'lock', title: 'Logout' }],
      track: [
        {
          complete: 'radio_button_checked',
          incomplete: 'radio_button_unchecked'
        }
      ],
      title: 'HabiTrack'
    }
  },
  mounted () {
    this.getHabits()
  },
  methods: {
    // asynhronously grab habit entries
    async getHabits() {
      const response = await PostService.fetchHabits()
      this.posts = response.data.habits
    }
  }
}
</script>
