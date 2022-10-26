import axios from 'axios'

const api = axios.create({
  baseURL: process.env.API_URL,
  timeout: 30 * 1000,
  withCredentials: true,
})

api.interceptors.request.use(
  async function (config) {
    config.headers = {
      'Content-Type': 'application/json',
      ...config.headers
    }
    return config 
  },
  function (error) {
    return Promise.reject(error);
  }
)

api.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    if (error.response.status === 404) {
      return null;
    }
    return Promise.reject(
      // do something
    )
  }
)

export default api 
