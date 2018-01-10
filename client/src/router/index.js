import Vue from 'vue'
import Router from 'vue-router'
import TabDashboard from '@/components/TabDashboard'
// import Posts from '@/components/Posts'
// import NewPost from '@/components/NewPost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TabDashboard',
      component: TabDashboard
    }
    // {
    //   path: '/posts',
    //   name: 'Posts',
    //   component: Posts
    // },
    // {
    //   path: '/posts/new',
    //   name: 'NewPost',
    //   component: NewPost
    // }
  ]
})
