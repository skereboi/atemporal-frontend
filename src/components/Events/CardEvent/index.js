/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export const CardEvent = (props) => {
  const {
    foto_evento,
    nombre_evento,
    lugar,
    nombre_organizador,
    fecha_evento,
    id_evento
  } = props

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
        </div>
      </div>
  )
}
