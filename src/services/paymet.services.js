/* eslint-disable camelcase */
import Axios from 'axios'
import globalConfig from '../config'

export const paymentService = {
  getAllMethods: async () => {
    const { data } = await Axios.get(`${globalConfig.url}/api/metodos-pago`)
    return data
  }
}
