/* eslint-disable camelcase */
import Axios from 'axios'
import globalConfig from '../config'

export const categoryService = {
  getAllCategories: async () => {
    const { data } = await Axios.get(`${globalConfig.url}/api/categorias/`)
    return data
  },
  getOneCategory: async (id) => {
    const { data } = await Axios.get(`${globalConfig.url}/api/categorias/${id}`)
    return data
  }
}
