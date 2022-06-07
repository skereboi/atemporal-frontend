/* eslint-disable camelcase */
import Axios from 'axios'
import globalConfig from '../config'

export const reservationService = {
  createReservation: async (reservation) => {
    const { data } = await Axios.post(`${globalConfig.url}/api/eventos/reservar`, reservation)
    return data
  },
  getReservation: async () => {
    const { data } = await Axios.post(`${globalConfig.url}/api/eventos/reservar`)
    return data
  }
}
