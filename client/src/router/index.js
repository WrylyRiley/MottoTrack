import Vue from 'vue'
import Router from 'vue-router'

import Welcome from '@/components/Welcome'
import Posts from '@/components/Posts'
import NewPost from '@/components/NewPost'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/new',
      name: 'NewPost',
      component: NewPost
    }
  ]
})
