<template>
  <div class="posts">
    <h1>Posts</h1>

    <div v-for="post in posts" :key="post">
      <p>
        <span>
          <b>{{ post.title }}</b>
        </span>
        <span>{{ post.description }}</span>
      </p>
    </div>
  </div>
</template>

<script>
  import PostsService from '@/services/PostService'

  export default {
    name: 'posts',
    data () {
      return {
        posts: []
      }
    },
    mounted () {
      this.getPosts()
    },
    methods: {
      async getPosts () {
        const response = await PostsService.fetchPosts()
        this.posts = response.data
      }
    }
  }
</script>
