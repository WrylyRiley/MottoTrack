<template>
  <v-app>
    <div class="posts">
      <v-toolbar color="indigo" dark fixed app>
        <v-icon>home</v-icon>
        <v-toolbar-title>Motto Tracker</v-toolbar-title>
      </v-toolbar>
      <v-content class="mx-5">
        <!-- Template with search from Vuetify docs -->
        <v-card>
          <v-card-title>
            COmpanies and Mottos
            <v-spacer></v-spacer>
            <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
          </v-card-title>
          <v-data-table :headers="headers" :items="items" :search="search" hide-actions item-key="title">
            <template slot="items" slot-scope="props">
              <tr @click="props.expanded = !props.expanded; genModel(props.item)">
                <td class="text-xs-right">{{ props.item.title }}</td>
                <td class="text-xs-right">{{ props.item.motto }}</td>
                <td class="text-xs-right">{{ props.item.description }}</td>
                <td hidden class="text-xs-right">{{ props.item._id }}</td>
              </tr>
            </template>
            <template slot="expand" slot-scope="props">
              <v-card flat class="mx-2 height-2">
                <!-- Form goes here, reload on edit -->
                <v-card-text>Peek-a-boo!</v-card-text>
                <v-form v-model="valid" ref="form" lazy-validation>
                  <v-text-field label="ID" v-model="newModel._id" readonly ></v-text-field>
                  <v-text-field label="Title" v-model="newModel.title" required></v-text-field>
                  <v-text-field label="Motto" v-model="newModel.motto" required></v-text-field>
                  <v-text-field label="Description" v-model="newModel.description" required></v-text-field>
                  <v-btn @click="submit" :disabled="!valid">
                    submit
                  </v-btn>
                  <v-btn @click="clear">clear</v-btn>
                </v-form>
              </v-card>
            </template>
            <template slot="pageText" slot-scope="{ pageStart, pageStop }">
              From {{ pageStart }} to {{ pageStop }}
            </template>
          </v-data-table>
        </v-card>
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
      headers: [
        {
          text: 'Title',
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
          sortable: false,
          value: 'description'
        }
      ],
      items: [],
      valid: true,
      newModel: []
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
    loadVars(itemToLoad) {
      this.newModel.id = itemToLoad._id
      console.log(itemToLoad._id)
      this.newModel.title = itemToLoad.title
      console.log(itemToLoad.title)
      this.newModel.motto = itemToLoad.motto
      console.log(itemToLoad.motto)
      this.newModel.description = itemToLoad.description
      console.log(itemToLoad.description)
    },
    // Vuetify Template
    submit() {
      PostService.changePost({
        id: this.newModel.id,
        title: this.newModel.title,
        motto: this.newModel.motto,
        description: this.newModel.description
      })
    },
    // Vuetify Template
    clear() {
      this.$refs.form.clear()
    },
    genModel(model) {
      // This, instead of deep cloning. Reference objects are linked!  Remember Intro Java!
      this.newModel = JSON.parse(JSON.stringify(model))
      console.log(this.newModel)
    }
  }
}
</script>

<style>

</style>
