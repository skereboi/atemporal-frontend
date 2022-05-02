import React from 'react'
import { Link } from 'react-router-dom'
export const AccountPassword = () => {
  return (
    <>
      {/* Account details */}
      <div className="ps-md-3 ps-lg-0 mt-md-2 py-md-4">

        <h1 className="h2 pt-xl-1 pb-3">Cambiar contraseña</h1>
        {/* Basic info */}
        <h2 className="h5 text-primary mb-4">Ingresa una nueva contraseña</h2>
        <form className="needs-validation border-bottom pb-3 pb-lg-4" noValidate>
          <div className="row pb-2">
            <div className="col-sm-12 mb-4">
              <label htmlFor="nombre" className="form-label fs-base">Contraseña</label>
              <input type="text" id="nombre" className="form-control form-control-lg" />
            </div>
            <div className="col-sm-12 mb-4">
              <label htmlFor="nombre" className="form-label fs-base">Confirmar contraseña</label>
              <input type="text" id="nombre" className="form-control form-control-lg" />
            </div>
          </div>
          <div className="d-flex mb-3">
            <Link to="/mi-cuenta" className="btn btn-secondary me-3">Cancelar</Link>
            <button type="submit" className="btn btn-primary">Guardar cambios</button>
          </div>
        </form>
      </div>
    </>
  )
}
