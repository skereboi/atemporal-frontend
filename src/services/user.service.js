/* eslint-disable camelcase */
import Axios from 'axios'
import globalConfig from '../config'

export const userService = {
  getAllUsers: async () => {
    const { data } = await Axios.get(`${globalConfig.url}/api/usuarios`)
    return data
  },
  getOneUser: async (id) => {
    const { data } = await Axios.get(`${globalConfig.url}/api/usuarios/${id}`)
    return data
  },
  createOneUser: async (user) => {
    const { data } = await Axios.post(`${globalConfig.url}/api/usuarios`, user)
    return data
  },
  updateOneUser: async (id, user) => {
    console.log('ID_USER', id)
    const { data } = await Axios.put(`${globalConfig.url}/api/usuarios/${id}`, user)
    return data
  },
  deleteOneUser: async (id) => {
    const { data } = await Axios.delete(`${globalConfig.url}/api/usuarios/${id}`)
    return data
  }
}
