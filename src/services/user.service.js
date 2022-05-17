/* eslint-disable camelcase */
import Axios from 'axios'
import globalConfig from '../config'

export const userService = {
  getAllUsers: async () => {
    const { data } = await Axios.get(`${globalConfig.url}/api/usuarios`)
    return data
  },
  getOneUser: async () => {
    const { data } = await Axios.get(`${globalConfig.url}/api/usuarios/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('TOKEN_ATEMPORAL')}`
      }
    })
    return data
  },
  updateOneUser: async (id, user) => {
    console.log('ID_USER', id)
    const { data } = await Axios.put(`${globalConfig.url}/api/usuarios/${id}`, user)
    return data
  }
}
