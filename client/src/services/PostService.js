import Api from '@/services/Api'

export default {
  fetchPosts () {
    return Api().get('posts')
  },
  addPost (params) {
    return Api().post('posts', params)
  },
  changePost (params) {
    return Api().put('posts/' + params._id, params)
  }
}
