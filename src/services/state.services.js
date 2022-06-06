/* eslint-disable camelcase */
import Axios from 'axios'
import globalConfig from '../config'

export const stateService = {
  getAllStates: async () => {
    const { data } = await Axios.get(`${globalConfig.url}/api/estados/`)
    return data
  },
  getOneState: async (id) => {
    const { data } = await Axios.get(`${globalConfig.url}/api/estados/${id}`)
    return data
  }
}
