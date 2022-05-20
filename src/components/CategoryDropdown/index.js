import React, { useEffect, useState } from 'react'
import { categoryService } from '../../services/category.service'

export const CategoryDropdown = ({ setCategorySelected, setCategoryName }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    // Logica: Obtener categorias, peticion asincrona
    const getCategories = async () => {
      try {
        // Esperar a resolver la peticion para avanzar
        const dbCateogires = await categoryService.getAllCategories()
        setCategories(dbCateogires)
      } catch (error) {
        console.log(error)
      }
    }

    getCategories()
  }, [])

  const handlerOnChange = (event) => {
    const index = event.target.value
    const name = event.target.options[index].getAttribute('nombre')

    // console.log(index)
    // console.log(name)

    setCategorySelected(index)
    setCategoryName(name)
  }

  return (
    <>
        {/* Page content */}
        <div className="col-lg-5 col-sm-6">
          <div className="d-flex align-items-center">
          <select onChange={handlerOnChange} className="form-select">
              {/* ALL CATEGORIES  */}
              <option value='0'>Todas las categorias...</option>
              {
              categories.map(category => (<CategoryOption key={category.id_categoria} {...category} />))

              }
            </select>
          </div>
        </div>
    </>
  )
}

const CategoryOption = (props) => {
  return (
    <option value={props.id_categoria} nombre={props.nombre}>{props.nombre}</option>
  )
}
