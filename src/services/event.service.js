/* eslint-disable camelcase */
import Axios from 'axios'
import globalConfig from '../config'

export const eventService = {
  getAllEvents: async (esta_activo = 1) => {
    const { data } = await Axios.get(`${globalConfig.url}/api/eventos?esta_activo=${esta_activo}`)
    return data
  },
  getOneEvent: async (id) => {
    const { data } = await Axios.get(`${globalConfig.url}/api/eventos/${id}`)
    return data
  },
  aproveEvent: async (id) => {
    const { data } = await Axios.put(`${globalConfig.url}/api/eventos/aprobar/${id}`)
    return data
  }
}
