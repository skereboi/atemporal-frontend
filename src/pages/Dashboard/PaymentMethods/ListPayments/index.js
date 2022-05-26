/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from '../../../../components/Dashboard/Modal'
import { paymentService } from '../../../../services/payment.service'

export const ListPayments = () => {
  const [payments, setPayments] = useState([])
  const [isDeleted, setIsDeleted] = useState(false)

  useEffect(() => {
    const getAllPayments = async () => {
      try {
        const payments = await paymentService.getAllPayments()
        setPayments(payments)
      } catch (error) {
        console.log(error)
      }
    }

    getAllPayments()
  }, [isDeleted])
  return (
    <>
      {/* Basic table */}
      <div className="row">
        <div className="col-md-8 col-12">
          <h1>Lista de métodos de pago</h1>
        </div>
        <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
          <Link to="crear" className='btn btn-sm btn-primary'>Agregar método de pago</Link>
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
            payments.map((u, index) =>
              <RowTable key={index} {...u} index={index} />)
          }
        </table>
      </div>
      {
        payments.map((e, index) =>
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
