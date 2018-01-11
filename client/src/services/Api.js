import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://project-two-api.herokuapp.com/'
  })
}
