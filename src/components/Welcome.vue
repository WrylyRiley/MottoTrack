emplate>
<t <v-app>
  <v-toolbar color="deep-orange darken-1" dark fixed app>
    <v-btn small to="/" light fab>
      <v-icon>home</v-icon>
    </v-btn>
    <v-toolbar-title>
      <h3>MottoTracker</h3>
    </v-toolbar-title>
  </v-toolbar>
  <v-layout row justify-space-between>
    <v-dialog v-model="dialog" persistent max-width="500">
      <v-card>
        <v-card-title class="headline">Welcome to MottoTrack</v-card-title>
        <v-card-text>This app lets you CRUD company names, their mottos, and a short description into a remote database. Although not
          very robust, this app stands as testament to my personal challenge to learn Vue.js and deploy a working app in
          the span of three days. The app is hosted on gh-pages, and the API is deployed to Heroku. Enjoy!
        </v-card-text>
        <v-spacer></v-spacer>
        <v-card-text>Click my heart to begin!</v-card-text>
        <v-spacer></v-spacer>
        <v-card-text>
          <v-btn to="/posts" color="deep-orange darken-1" fab large @click.native="dialog = false">
            <v-icon color="white">favorite</v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
  </v-app>
  </template>

  <script>
    export default {
      name: 'Welcome',
      data() {
        return {
          msg: 'Welcome to Zach\'s Vue.js + Vuetify App',
          dialog: true
        }
      },
      mount() {
        this.dialog = true
      }
    }
  </script>
