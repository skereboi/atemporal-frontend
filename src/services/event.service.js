/* eslint-disable camelcase */
import Axios from 'axios'

export const eventService = {
  getAllEvents: async () => {
    const { data } = await Axios.get('http://localhost:4000/eventos')
    return data
  },
  getOneEvent: async (id) => {
    const { data } = await Axios.get(`http://localhost:4000/eventos/${id}`)
    return data
  },
  getAllEventsByCategory: async (id) => {
    const { data } = await Axios.get(`http://localhost:4000/eventos/${id}`)
    return data
  }
}
