/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'
import { eventService } from '../../../services/event.service'
import './style.scss'

export const CardEvent = (props) => {
  const {
    isAdmin,
    setIsRejected,
    isRejected,
    foto_evento,
    nombre_evento,
    fecha_evento,
    nombre_organizador,
    id_evento,
    ubicacion
  } = props
  const handlerRejectEvent = async (e) => {
    try {
      await eventService.rejectEvent(id_evento)
      setIsRejected(() => !isRejected)
    } catch (error) {
      alert('error')
      console.log(error)
    }
  }
  return (
    <div className="col pb-3">
      <div className="card">
        <img src={foto_evento} className="card-img-top card-event" alt={nombre_evento} />
        <div className="card-body">
          <h5 className="card-title">{nombre_evento}</h5>
          <Link to={`/eventos/${id_evento}`} className="badge fs-sm text-nav bg-secondary text-decoration-none">{ubicacion}</Link>
          <span className="fs-sm text-muted">{fecha_evento}</span>
          <div className="card-footer py-4">
            <span>Organizador</span>
            <p className="d-flex align-items-center fw-bold text-dark text-decoration-none">
              {nombre_organizador}
            </p>
          </div>
          <Link to={`/eventos/${id_evento}`} className="btn btn-sm btn-primary">Ver detalle</Link>
          {
            isAdmin && (<button className='btn btn-sm btn-danger' onClick={handlerRejectEvent}>Rechazar evento</button>)
          }
        </div>
      </div>
    </div>
  )
}
