import React, { useEffect, useState } from 'react'
import { userService } from '../../../../services/user.service'
import { Link } from 'react-router-dom'
import { Modal } from '../../../../components/Dashboard/Modal'

export const ListUsers = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const users = await userService.getAllUsers()
        setUsers(users)
      } catch (error) {
        console.log(error)
      }
    }

    getAllUsers()
  }, [users])
  return (
    <>
      {/* Basic table */}
      <div className="row">
        <div className="col-md-8 col-12">
          <h1>Lista de usuarios</h1>
        </div>
        <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
          <Link to="crear" className='btn btn-sm btn-primary'>Agregar usuario</Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Celular</th>
              <th>Acciones</th>
            </tr>
          </thead>
          {
            users.map((u, index) => <RowTable key={u.usuario_id} {...u} index={index} />)
          }
        </table>
      </div>
      {
        users.map((u, index) => <Modal key={u.email} {...u} index={index} />)
      }
    </>
  )
}
const RowTable = (props) => {
  return (
    <tbody>
      <tr>
        <td>{ props.nombre }</td>
        <td>{props.email}</td>
        <td>{props.celular}</td>
        <td className='d-flex justify-content-around'>
          <Link to={`editar/${props.id_usuario}`} className='btn btn-sm btn-info mr-4'>
            <i className="bx bx-edit" />
          </Link>

          <button
            className='btn btn-sm btn-danger'
            type="button" data-bs-toggle="modal"
            data-bs-target={`#modal_${props.index}`}>
            <i className="bx bxs-trash" />
          </button>
        </td>
      </tr>
    </tbody>
  )
}
