<template>
<div class="posts">
  <v-content>
    <!-- Template with search from Vuetify docs -->
    <v-card>
      <v-card-title>
        Nutrition
        <v-spacer></v-spacer>
        <v-text-field
          append-icon="search"
          label="Search"
          single-line
          hide-details
          v-model="search"
        ></v-text-field>
      </v-card-title>
      <v-data-table
        v-bind:headers="headers"
        v-bind:items="posts"
        v-bind:search="search"
      >
      <!-- binds template to posts array -->
      <template slot="posts" slot-scope="props">
        <!-- Table entry -->
        <td class="text-xs-right">
          <!-- Title edit dialog embedded in table entry -->
          <v-edit-dialog
            @open="tmp = props.post.title"
            @save="props.post.title = tmp || props.post.title"
            large
            lazy
          >
            <div>{{ props.post.title }}</div>
            <div slot="input" class="mt-3 title">Update Title</div>
            <v-text-field
              slot="input"
              label="Edit"
              v-model="tmp"
              single-line
              counter
              autofocus
              :rules="[max35chars]"
            ></v-text-field>
          </v-edit-dialog>
        </td>
        <!-- Motto edit dialog embedded in table entry -->
          <td class="text-xs-right">
          <v-edit-dialog
            @open="tmp = props.post.motto"
            @save="props.post.motto = tmp || props.post.motto"
            large
            lazy
          >
            <div>{{ props.post.motto }}</div>
            <div slot="input" class="mt-3 title">Update Motto</div>
            <v-text-field
              slot="input"
              label="Edit"
              v-model="tmp"
              single-line
              counter
              autofocus
              :rules="[max35chars]"
            ></v-text-field>
          </v-edit-dialog>
        </td>
      <td class="text-xs-right">
          <v-edit-dialog
            @open="tmp = props.post.description"
            @save="props.post.description = tmp || props.post.description"
            large
            lazy
          >
            <div>{{ props.post.description }}</div>
            <div slot="input" class="mt-3 title">Update Description</div>
            <v-text-field
              slot="input"
              label="Edit"
              v-model="tmp"
              multi-line
              counter
              autofocus
              :rules="[max100chars]"
            ></v-text-field>
          </v-edit-dialog>
        </td>
      </template>
      <template slot="no-data">
        <v-alert :value="true" color="error" icon="warning">
          Sorry, nothing to display here :(
        </v-alert>
      </template>
      <template slot="pageText" slot-scope="{ pageStart, pageStop }">
        From {{ pageStart }} to {{ pageStop }}
      </template>
    </v-data-table>
  </v-card>
  </v-content>
</div>
</template>

<script>
import PostService from '@/services/PostService'
export default {
  name: 'posts',
  data() {
    // Part of template used from vuetify docs
    return {
      max35chars: v => v.length <= 35 || 'Input too long!',
      max100chars: v => v.length <= 100 || 'Input too long!',
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
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostService.fetchPosts()
      this.posts = response.data
    }
  }
}
</script>

<style>

</style>
