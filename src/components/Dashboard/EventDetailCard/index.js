/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'

export const EventDetailCard = ({ type, codigo_qr, evento = {} }) => {
  return (
    <div className="card border-0 shadow-sm overflow-hidden mb-4">
      <div className="row g-0">
        <img src={type === 'reservacion' ? `${codigo_qr}` : evento.foto_evento }
          className="col-sm-4 bg-repeat-0 bg-position-center bg-size-cover"
          alt='evento'
        />
        <div className="col-sm-8">
          <div className="card-body">
            <div className="fs-sm text-muted mb-1">Fecha: {evento.fecha_evento}</div>
            <h2 className="h4 pb-1 mb-2">
              {evento.nombre_evento}
            </h2>
            {
              type === 'reservacion' &&
              (
                <a href={evento.itinerario_evento} className="btn btn-secondary my-4">
                  Consultar itinerario
                </a>
              )
            }
            <div className="d-flex">
              <Link to={`/eventos/${evento.id_evento}`} className="btn btn-outline-primary px-3 px-lg-4 me-3">
                <i className={`bx ${type === 'publication' ? 'bx-edit' : 'bx-detail'} fs-xl me-xl-2`} />
                <span className="d-none d-xl-inline">
                  {type === 'publication' ? 'Editar' : 'Ver detalle'}
                </span>
              </Link>
              <button type="button" className="btn btn-outline-danger px-3 px-lg-4">
                <i className={`bx ${type === 'publication' ? 'bx-error-alt' : 'bx-trash-alt'} fs-xl me-xl-2`}/>
                <span className="d-none d-xl-inline">
                  {type === 'publication' ? 'Desactivar' : 'Cancelar asistencia'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
