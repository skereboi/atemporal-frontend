/* eslint-disable camelcase */
import Axios from 'axios'

export const createAccount = async (account) => {
  const { data } = await Axios.post('http://localhost:4000/register', account)
  return data
}

export const loginService = async (credentials) => {
  const { data } = await Axios.post('http://localhost:4000/login/', credentials)
  return data
}
export const whoIamService = async (token) => {
  const { data } = await Axios.get('http://localhost:4000/usuarios/me', {
    headers: { Authorization: `Bearer ${token}` }
  })
  return data
}
export const initAxiosInterceptors = () => {
  Axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('TOKEN_ATEMPORAL')

    if (token) {
      config.headers.Authorization = `bearer ${token}`
    }

    return config
  })

  Axios.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      if (error.response.status === 401) {
        localStorage.removeItem('TOKEN_ATEMPORAL')
        window.location = '/'
      } else {
        return Promise.reject(error)
      }
    }
  )
}
