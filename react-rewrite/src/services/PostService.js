import Api from './Api'

export default {
  fetchPosts () {
    return Api().get('posts')
  },
  addPost (params) {
    console.log(params)
    return Api().post('posts', params)
  },
  changePost (params, deleteFlag) {
    if (deleteFlag) {
      return Api().delete('posts/' + params._id)
    } else {
      return Api().put('posts/' + params._id, params)
    }
  }
}
