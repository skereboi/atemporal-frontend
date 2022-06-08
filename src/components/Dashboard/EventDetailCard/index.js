/* eslint-disable camelcase */
import React from 'react'

export const EventDetailCard = ({ type, codigo_qr, nombre, descripcion }) => {
  return (
    <div className="card border-0 shadow-sm overflow-hidden mb-4">
      <div className="row g-0">
        <img src={type === 'reservacion' ? `${codigo_qr}` : '' }
          className="col-sm-4 bg-repeat-0 bg-position-center bg-size-cover"
          alt='evento'
        />
        <div className="col-sm-8">
          <div className="card-body">
            <div className="fs-sm text-muted mb-1">Fecha</div>
            <h2 className="h4 pb-1 mb-2">
              <p>Nombre del evento</p>
            </h2>
            <p className="mb-4 mb-lg-5">Descripción del evento</p>
            <div className="d-flex">
              <button type="button" className="btn btn-outline-primary px-3 px-lg-4 me-3">
                <i className={`bx ${type === 'publication' ? 'bx-edit' : 'bx-detail'} fs-xl me-xl-2`} />
                <span className="d-none d-xl-inline">
                  {type === 'publication' ? 'Editar' : 'Ver detalle'}
                </span>
              </button>
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
