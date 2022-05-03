import React from 'react'
import { Link } from 'react-router-dom'

export const InformationEvent = () => {
  return (
    <>
      <h1 className="h2 pt-xl-1 pb-3">Información del evento</h1>
      {/* Basic info */}
      <h2 className="h5 text-primary mb-4">Datos del evento</h2>
      <form className="needs-validation border-bottom pb-3 pb-lg-4" noValidate>
        <div className="row pb-2">
          <div className="col-sm-6 mb-4">
            <label htmlFor="fn" className="form-label fs-base">Télefono principal</label>
            <input type="text" id="fn" className="form-control form-control-lg" />
          </div>
          <div className="col-sm-6 mb-4">
            <label htmlFor="sn" className="form-label fs-base">Télefono de emergencia</label>
            <input type="text" id="sn" className="form-control form-control-lg" />
          </div>
          <div className="col-sm-6 mb-4">
            <label htmlFor="email" className="form-label fs-base">Correo electrónico</label>
            <input type="email" id="email" className="form-control form-control-lg" />
          </div>
        </div>
        <div className="d-flex mb-3">
          <Link to="#" className="btn btn-primary">Siguiente</Link>
        </div>
      </form>
    </>
  )
}
