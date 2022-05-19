/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { userService } from '../../../../services/user.service'
import { Link } from 'react-router-dom'
import { Modal } from '../../../../components/Dashboard/Modal'
import { useAuth } from '../../../../hooks/useAuth'

export const ListUsers = () => {
  const { user } = useAuth()
  const [users, setUsers] = useState([])
  const [isDeleted, setIsDeleted] = useState(false)

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
  }, [isDeleted])
  return (
    <>
      {/* Basic table */}
      <div className="row">
        <div className="col-md-8 col-12">
          <h1>Lista de administradores</h1>
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
            users.map((u, index) =>
              <RowTable key={index} {...u} index={index} user={user} />)
          }
        </table>
      </div>
      {
        users.map((e, index) =>
          <Modal key={e.email}
            type="user"
            {...e} index={index}
            idToDelete={e.id_usuario}
            setIsDeleted={setIsDeleted}
            isDeleted={isDeleted}
          />
        )
      }
    </>
  )
}
const RowTable = (props) => {
  const { user, nombre, email, celular, id_usuario } = props
  return (
    <tbody>
      <tr>
        <td>{ nombre }</td>
        <td>{email}</td>
        <td>{celular}</td>
        <td className='d-flex justify-content-around'>
          <Link to={`editar/${id_usuario}`}
            className={`btn btn-sm btn-info ${user.email === email && 'disabled'} mr-4`}>
            <i className="bx bx-edit" />
          </Link>

          <button
            className='btn btn-sm btn-danger'
            type="button" data-bs-toggle="modal"
            disabled={user.email === email}
            data-bs-target={`#modal_${props.index}`}>
            <i className="bx bxs-trash" />
          </button>
        </td>
      </tr>
    </tbody>
  )
}
