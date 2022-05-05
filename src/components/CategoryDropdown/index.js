// Se importa react, su estado y el efecto
import React, { useEffect, useState } from 'react'
// Para hacer el dropdoen dinamico se usara el servicio de Categorias
import { categoryService } from '../../services/category.service'
// import { EventDiscoverPage } from '../../pages/Events/EventDiscover'

// Genera N Opciones de Categorias depeniendo del Sser
const CategoryOption = (props) => {
  return (
    <option value={props.id_categoria}>{props.nombre}</option>
  )
}

export const CategoryDropdown = () => {
  // Se usara el Estado
  const [categories, setCategories] = useState([])

  const handlerChange = (e) => {
    console.log(Number(e.target.value))
  }
  // Cuando el estado cambie, se tendra este efecto
  useEffect(() => {
    // Logica: Obtener categorias, peticion asincrona
    const getCategories = async () => {
      try {
        // Esperar a resolver la peticion para avanzar
        const dbCateogires = await categoryService.getAllCategories()
        setCategories(dbCateogires)
        console.log(dbCateogires)
        // id={parseInt(value)}
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
            <select onChange={handlerChange} className="form-select">
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
