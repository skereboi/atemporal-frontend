import React from 'react'
import { Link } from 'react-router-dom'

export const AccountEvents = () => {
  return (
    <>
      {/* Account collections */}
      <div className="pb-5 mb-lg-2 mt-md-0">
        <div className="ps-md-3 ps-lg-0 mt-md-2 pt-md-4 pb-md-2">
          <div className="d-sm-flex align-items-center justify-content-between pt-xl-1 mb-3 pb-3">
            <h1 className="h2 mb-sm-0">Mis eventos</h1>
            <select className="form-select" style={{ maxWidth: '15rem' }}>
              <option value="Published">Ordenar</option>
              <option value="Category">Más reciente</option>
              <option value="Title AZ">Más viejo</option>
            </select>
          </div>
          {/* Item */}
          <div className="card border-0 shadow-sm overflow-hidden mb-4">
            <div className="row g-0">
              <a href="#" className="col-sm-4 bg-repeat-0 bg-position-center bg-size-cover" style={{ backgroundImage: 'url(assets/img/account/collection01.jpg)', minHeight: '13rem' }} />
              <div className="col-sm-8">
                <div className="card-body">
                  <div className="fs-sm text-muted mb-1">Nov 30, 2021</div>
                  <h2 className="h4 pb-1 mb-2">
                    <Link to={'eventos/:id'}>Nombre del evento</Link>
                  </h2>
                  <p className="mb-4 mb-lg-5">Descripción del evento</p>
                  <div className="d-flex">
                    <button type="button" className="btn btn-outline-primary px-3 px-lg-4 me-3">
                      <i className="bx bx-edit fs-xl me-xl-2" />
                      <span className="d-none d-xl-inline">Ver detalle</span>
                    </button>
                    <button type="button" className="btn btn-outline-danger px-3 px-lg-4">
                      <i className="bx bx-trash-alt fs-xl me-xl-2" />
                      <span className="d-none d-xl-inline">Cancelar asistencia</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
