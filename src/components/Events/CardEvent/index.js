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
    lugar,
    nombre_organizador,
    fecha_evento,
    id_evento
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
    <div className="card card-event bg-dark text-light">
        <div className="img-wrapper">
          <img src={foto_evento} className="card-img-top" alt={nombre_evento} />
          <span
            className='card-event-date fw-bold bg-primary text-light'>
            Fecha: {fecha_evento}
          </span>
        </div>
        <div className="card-body card-event-body">
          <h5
            className="card-title card-event-title text-light">
            {nombre_evento}
          </h5>

          <div className="card-event-data">
            <span>
              Lugar
            </span>
            <p
              className="d-flex
              align-items-center fw-bold text-decoration-none"
            >
              {lugar}
            </p>
          </div>
          <div className="card-event-data">
            <span>
              Organizador
            </span>
            <p
              className="d-flex
              align-items-center fw-bold text-decoration-none"
            >
              {nombre_organizador}
            </p>
          </div>
          <Link to={`/eventos/${id_evento}`} className="btn btn-sm btn-primary">Ver detalle</Link>
          {
            isAdmin && (<button className='btn btn-sm btn-danger' onClick={handlerRejectEvent}>Rechazar evento</button>)
          }
        </div>
      </div>
  )
}
