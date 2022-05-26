/* eslint-disable camelcase */
import Axios from 'axios'
import globalConfig from '../config'

export const eventService = {
  createOneEvent: async (dataEvent) => {
    const { data } = await Axios.post(`${globalConfig.url}/api/eventos/registrar-evento`, { ...dataEvent })
    return data
  },
  getAllEventsPublic: async () => {
    const { data } = await Axios.get(`${globalConfig.url}/eventos?esta_activo=1&esta_aprobado=1`)
    return data
  },
  getAllEvents: async () => {
    const { data } = await Axios.get(`${globalConfig.url}/eventos`)
    return data
  },
  getAllEventsToAproved: async () => {
    const { data } = await Axios.get(`${globalConfig.url}/api/eventos?esta_activo=1&esta_aprobado=0`)
    return data
  },
  getAllEventsAproved: async () => {
    const { data } = await Axios.get(`${globalConfig.url}/api/eventos?esta_activo=1&esta_aprobado=1`)
    return data
  },
  getAllEventsDeleted: async () => {
    const { data } = await Axios.get(`${globalConfig.url}/api/eventos?esta_activo=0&esta_aprobado=0`)
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
  rejectEvent: async (id) => { // Pasa a por aprobar
    const { data } = await Axios.put(`${globalConfig.url}/api/eventos/rechazar/${id}`)
    return data
  },
  removeEvent: async (id) => {
    const { data } = await Axios.delete(`${globalConfig.url}/api/eventos/${id}`)
    return data
  },
  getEventsByCategory: async (id) => {
    const { data } = await Axios.get(`${globalConfig.url}/api/eventos/porCategoria/${id}`)
    return data
  },
  getEventsByTextSearch: async (textInput) => {
    const { data } = await Axios.get(`${globalConfig.url}/api/eventos/porTexto/${textInput}`)
    return data
  },
  getAllByEstado: async (name) => {
    const { data } = await Axios.get(`${globalConfig.url}/api/eventos/porEstado/${name}`)
    return data
  },
  getAllByCiudad: async (name) => {
    const { data } = await Axios.get(`${globalConfig.url}/api/eventos/porCiudad/${name}`)
    return data
  }
}
// a apr
// 0 0 eliminado
// 1 0 pendiente por aprobar
// 1 1 publicado
// 0 0 rechazado
// 1 0 pendiente por aprobar
