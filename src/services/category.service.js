/* eslint-disable camelcase */
import Axios from 'axios'

export const categoryService = {
  getAllCategories: async () => {
    const { data } = await Axios.get('http://localhost:4000/api/categorias/')
    return data
  },
  getOneCategory: async (id) => {
    const { data } = await Axios.get(`http://localhost:4000/api/categorias/${id}`)
    return data
  }
}
