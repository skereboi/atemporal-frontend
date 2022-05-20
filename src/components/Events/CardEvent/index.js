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
    <div className="col-12 col-md-4 col-lg-3">
      <div className="card card-event">
        <div className="img-wrapper">
          <img src={foto_evento} className="card-img-top" alt={nombre_evento} />
          <span
            className='card-event-date fw-boldtext-dark'>
            Fecha: {fecha_evento}
          </span>
        </div>
        <div className="card-body card-event-body">
          <h5 className="card-title card-event-title">{nombre_evento}</h5>

          <div className="card-event-data">
            <span>
              Lugar
            </span>
            <p
              className="d-flex
              align-items-center fw-bold
              text-dark text-decoration-none"
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
              align-items-center fw-bold
              text-dark text-decoration-none"
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
    </div>
  )
}
