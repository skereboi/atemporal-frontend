/* eslint-disable camelcase */
import Axios from 'axios'
import globalConfig from '../config'

export const createAccount = async (account) => {
  const { data } = await Axios.post(`${globalConfig.url}/register`, account)
  return data
}

export const loginService = async (credentials) => {
  const { data } = await Axios.post(`${globalConfig.url}/login`, credentials)
  return data
}
export const whoIamService = async (token) => {
  const { data } = await Axios.get(`${globalConfig.url}/api/usuarios/me`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return data
}

export const authService = {
  recoverPassword: async (email) => {
    const { data } = await Axios.post(`${globalConfig.url}/recuperar-password`, { email })
    return data
  },
  changePassword: async (password, token) => {
    const instance = Axios.create({
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    const { data } = await instance.put(`${globalConfig.url}/cambiar-password`, { password })
    return data
  },
  updatePassword: async (password, id) => {
    const { data } = await Axios.put(`${globalConfig.url}/api/usuarios/${id}/actualizar-password`, { password })
    return data
  }
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
