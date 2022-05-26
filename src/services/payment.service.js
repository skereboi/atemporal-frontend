/* eslint-disable camelcase */
import Axios from 'axios'
import globalConfig from '../config'

export const paymentService = {
  getAllPayments: async () => {
    const { data } = await Axios.get(`${globalConfig.url}/api/metodos-pago/`)
    return data
  },
  getOnePayment: async (id) => {
    const { data } = await Axios.get(`${globalConfig.url}/api/metodos-pago/${id}`)
    return data
  },
  updateOnePayment: async (id, payment) => {
    const { data } = await Axios.put(`${globalConfig.url}/api/metodos-pago/${id}`, payment)
    return data
  },
  createOnePayment: async (payment) => {
    const { data } = await Axios.post(`${globalConfig.url}/api/metodos-pago`, payment)
    return data
  },
  deleteOnePayment: async (id) => {
    const { data } = await Axios.delete(`${globalConfig.url}/api/metodos-pago/${id}`)
    return data
  }
}
