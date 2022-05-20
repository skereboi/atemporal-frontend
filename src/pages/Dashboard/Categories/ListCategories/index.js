/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from '../../../../components/Dashboard/Modal'
import { categoryService } from '../../../../services/category.service'

export const ListCategories = () => {
  const [categories, setCategories] = useState([])
  const [isDeleted, setIsDeleted] = useState(false)

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const categories = await categoryService.getAllCategories()
        setCategories(categories)
      } catch (error) {
        console.log(error)
      }
    }

    getAllCategories()
  }, [isDeleted])
  return (
    <>
      {/* Basic table */}
      <div className="row">
        <div className="col-md-8 col-12">
          <h1>Lista de categorias</h1>
        </div>
        <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
          <Link to="crear" className='btn btn-sm btn-primary'>Agregar categoria</Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th className='text-center'>Acciones</th>
            </tr>
          </thead>
          {
            categories.map((u, index) =>
              <RowTable key={index} {...u} index={index} />)
          }
        </table>
      </div>
      {
        categories.map((e, index) =>
          <Modal key={e.nombre}
            type="category"
            {...e} index={index}
            idToDelete={e.id_categoria}
            setIsDeleted={setIsDeleted}
            isDeleted={isDeleted}
          />
        )
      }
    </>
  )
}
const RowTable = (props) => {
  const { nombre, id_categoria } = props
  return (
    <tbody>
      <tr>
        <td>{ nombre }</td>
        <td className='row justify-content-center'>
          <Link to={`editar/${id_categoria}`}
            className='btn btn-sm btn-info col-2'>
            <i className="bx bx-edit" />
          </Link>

          <button
            className='btn btn-sm btn-danger col-2 offset-1'
            type="button" data-bs-toggle="modal"
            data-bs-target={`#modal_${props.index}`}>
            <i className="bx bxs-trash" />
          </button>
        </td>
      </tr>
    </tbody>
  )
}
