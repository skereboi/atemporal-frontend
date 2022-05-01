import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export const CardEvent = (props) => {
  return (
    <div className="col pb-3">

      <div className="card">
        <img src={props.foto_evento} className="card-img-top card-event" alt={props.nombre_evento} />
        <div className="card-body">
          <h5 className="card-title">{props.nombre_evento}</h5>
          <Link to={`/eventos/${props.id_evento}`} className="badge fs-sm text-nav bg-secondary text-decoration-none">{props.ubicacion}</Link>
          <span className="fs-sm text-muted">{props.fecha_evento}</span>
          <div className="card-footer py-4">
            <span>Organizador</span>
            <p className="d-flex align-items-center fw-bold text-dark text-decoration-none">
              {props.nombre_organizador}
            </p>
          </div>
          <Link to={`/eventos/${props.id_evento}`} className="btn btn-sm btn-primary">Ver detalle</Link>
        </div>
      </div>
    </div>
  )
}
