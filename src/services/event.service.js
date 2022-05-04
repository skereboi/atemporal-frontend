/* eslint-disable camelcase */
import Axios from 'axios'
import globalConfig from '../config'

export const eventService = {
  getAllEvents: async () => {
    const { data } = await Axios.get(`${globalConfig.url}/eventos`)
    return data
  },
  getOneEvent: async (id) => {
    const { data } = await Axios.get(`${globalConfig.url}/eventos/${id}`)
    return data
  }
}
