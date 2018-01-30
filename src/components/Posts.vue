<template>
  <v-app>
    <div class="posts">
      <v-toolbar color="deep-orange darken-1" dark fixed app>
        <v-btn small to="/" light fab>
          <v-icon>home</v-icon>
        </v-btn>
        <v-toolbar-title>
          <h3>MottoTrack</h3>
        </v-toolbar-title>
      </v-toolbar>
      <v-content class="mx-5">
        <!-- Template with search from Vuetify docs -->
        <v-card>
          <v-card-title>
            <h3>Companies and Mottos</h3>
            <v-spacer></v-spacer>
            <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
          </v-card-title>
          <v-data-table :headers="headers" :items="items" :search="search" hide-actions item-key="title">
            <template slot="items" slot-scope="props">
              <tr @click="props.expanded = !props.expanded; genIPModel(props.item)">
                <td class="text-xs-right">{{ props.item.title }}</td>
                <td class="text-xs-right">{{ props.item.motto }}</td>
                <td class="text-xs-right">{{ props.item.description }}</td>
                <td hidden class="text-xs-right">{{ props.item._id }}</td>
              </tr>
            </template>
            <template slot="expand" slot-scope="props">
              <v-card flat class="mx-2 height-2">
                <!-- Form goes here, reload on edit -->
                <v-form v-model="valid" ref="form" lazy-validation>
                  <v-text-field label="Title" v-model="inPlaceModel.title" required></v-text-field>
                  <v-text-field label="Motto" v-model="inPlaceModel.motto" required></v-text-field>
                  <v-text-field label="Description" v-model="inPlaceModel.description" required></v-text-field>
                  <v-btn color="info" @click="props.expanded = !props.expanded; update()" :disabled="!valid">
                    submit
                  </v-btn>
                  <v-btn color="info" @click="props.expanded = !props.expanded">close</v-btn>
                  <v-btn @click="props.expanded = !props.expanded; update(true)" color="error">delete</v-btn>
                </v-form>
              </v-card>
            </template>
            <template slot="pageText" slot-scope="{ pageStart, pageStop }">
              From {{ pageStart }} to {{ pageStop }}
            </template>
            <template slot="no-data">
              <v-alert :value="true" color="info" icon="info">
                Waking up the database, give me a second!
              </v-alert>
            </template>
          </v-data-table>
        </v-card>
        <!-- New Motto Template from Vuetify Docs -->
        <template>
          <v-layout row justify-center>
            <v-dialog v-model="dialog" persistent max-width="500px">
              <v-btn color="deep-orange darken-1" dark slot="activator">Add a motto!</v-btn>
              <v-card>
                <v-card-title>
                  <span class="headline">Add a Motto</span>
                </v-card-title>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12>
                        <v-text-field v-model="newModel.title" label="Company Name" required></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field v-model="newModel.motto" label="Motto" required></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field v-model="newModel.description" label="Description" required></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="info" @click.native="dialog = false">Close</v-btn>
                  <v-btn color="info" @click.native="newPost(); dialog = false">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-layout>
        </template>
      </v-content>
    </div>
  </v-app>
</template>

<script>
  import PostService from '@/services/PostService'
  export default {
    name: 'posts',
    // validates form
    valid: true,
    data() {
      // Part of template used from vuetify docs
      return {
        dialog: false,
        titleRules: [
          v => !!v || 'Name is required',
          v => (v && v <= 35) || 'Name must be less than 35 characters'
        ],
        mottoRules: [
          v => !!v || 'Motto is required',
          v => (v && v <= 35) || 'Motto must be less than 35 characters'
        ],
        descRules: [
          v => !!v || 'Description is required',
          v => (v && v <= 100) || 'Description must be less than 100 characters'
        ],
        tmp: '',
        search: '',
        pagination: {},
        headers: [{
          text: 'Company Name',
          align: 'left',
          sortable: true,
          value: 'title'
        },
        {
          text: 'Motto',
          align: 'left',
          sortable: true,
          value: 'motto'
        },
        {
          text: 'Description',
          align: 'left',
          sortable: true,
          value: 'description'
        }
        ],
        items: [],
        valid: true,
        inPlaceModel: '',
        newModel: {
          title: '',
          motto: '',
          description: ''
        }
      }
    },
    mounted() {
      this.getPosts()
    },
    methods: {
      async getPosts() {
        const response = await PostService.fetchPosts()
        this.items = response.data
      },
      // Vuetify Template
      async update(deleteFlag = false) {
        console.log('inPlaceModel\n\n\n' + JSON.stringify(this.inPlaceModel))
        var response = await PostService.changePost(this.inPlaceModel, deleteFlag)
        console.log(response)
        this.getPosts()
      },
      async newPost() {
        this.genModel(this.newModel)
        var response = await PostService.addPost(this.newModel)
        this.newModel = {
          title: '',
          motto: '',
          description: ''
        }
        console.log(response)
        this.getPosts()
      },
      genIPModel(model) {
        // This, instead of deep cloning. Reference objects are linked!  Remember Intro Java!
        this.inPlaceModel = JSON.parse(JSON.stringify(model))
      },
      genModel(model) {
        this.newModel = JSON.parse(JSON.stringify(model))
      }
    }
  }
</script>
