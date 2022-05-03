// Se importa react, su estado y el efecto
import React, { useEffect, useState } from 'react'
// Para hacer el dropdoen dinamico se usara el servicio de Categorias
import { categoryService } from '../../services/category.service'

const CategoryOption = (props) => {
  return (
    <option value="props.id_categoria">{props.nombre}</option>
  )
}

export const CategoryDropdown = () => {
  // Se usara el Estado
  const [categories, setCategories] = useState([])
  // Cuando el estado cambie, se tendra este efecto
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

  return (
    <>
        {/* Page content */}
        <div className="col-lg-5 col-sm-6">
          <div className="d-flex align-items-center">
            <select className="form-select">
              {/* ALL CATEGORIES  */}
              <option>Todas las categorias...</option>
              {
              categories.map(categories => (<CategoryOption key={categories} {...categories} />))
              }
            </select>
          </div>
        </div>
    </>
  )
}
