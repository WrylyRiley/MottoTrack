import Api from '@/services/Api'

export default {
  fetchTabs () {
    return Api().get('tabs')
  },
  addTab (params) {
    return Api().post('tabs', params)
  }
}
