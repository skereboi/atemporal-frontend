/* eslint-disable camelcase */
import Axios from 'axios'
import globalConfig from '../config'

export const eventService = {
  createOneEvent: async (dataEvent) => {
    const { data } = await Axios.post(`${globalConfig.url}/api/eventos/registrar-evento`, { ...dataEvent })
    return data
  },
  getAllEvents: async (esta_activo = 1) => {
    const { data } = await Axios.get(`${globalConfig.url}/eventos?esta_activo=${esta_activo}`)
    return data
  },
  getOneEvent: async (id) => {
    const { data } = await Axios.get(`${globalConfig.url}/eventos/${id}`)
    return data
  },
  aproveEvent: async (id) => {
    const { data } = await Axios.put(`${globalConfig.url}/api/eventos/aprobar/${id}`)
    return data
  },
  rejectEvent: async (id) => {
    const { data } = await Axios.put(`${globalConfig.url}/api/eventos/rechazar/${id}`)
    return data
  },
  getEventsByCategory: async (id) => {
    const { data } = await Axios.get(`${globalConfig.url}/api/eventos/porCategoria/${id}`)
    return data
  },
  getEventsByTextSearch: async (textInput) => {
    const { data } = await Axios.get(`${globalConfig.url}/api/eventos/porTexto/${textInput}`)
    return data
  }
}
