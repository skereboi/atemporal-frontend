import React from 'react'
import { Link } from 'react-router-dom'

export const CreateEventPage = () => {
  return (
    <>
      {/* Page content */}
      <section className="container pt-5">
        <div className="row">
          {/* Account details */}
          <div className="col-md-8 offset-lg-1 pb-5 mb-2 mb-lg-4 pt-md-5 mt-n3 mt-md-0">
            <div className="ps-md-3 ps-lg-0 mt-md-2 py-md-4">
              <h1 className="h2 pt-xl-1 pb-3">Información del evento</h1>
              {/* Basic info */}
              <h2 className="h5 text-primary mb-4">Datos del organizador</h2>
              <form className="needs-validation border-bottom pb-3 pb-lg-4" noValidate>
                <div className="row pb-2">
                  <div className="col-sm-6 mb-4">
                    <label htmlFor="fn" className="form-label fs-base">Télefono principal</label>
                    <input type="text" id="fn" className="form-control form-control-lg"/>
                  </div>
                  <div className="col-sm-6 mb-4">
                    <label htmlFor="sn" className="form-label fs-base">Télefono de emergencia</label>
                    <input type="text" id="sn" className="form-control form-control-lg"/>
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
            </div>
          </div>
          {/* Sidebar (User info + Account menu) */}
          <aside className="col-lg-3 col-md-4 border-end pb-5 mt-n5">
            <div className="position-sticky top-0">
              <div className="text-center pt-5">
                <h2 className="h5 mb-1">Crear evento</h2>
                <p className="mb-3 pb-3">Publica tu evento gratis</p>
                <div id="account-menu" className="list-group list-group-flush collapse d-md-block">
                  <Link to="#" className="list-group-item list-group-item-action d-flex align-items-center active">
                    <i className="bx bx-cog fs-xl opacity-60 me-2" />
                    Datos del organizador
                  </Link>
                  <Link to="#" className="list-group-item list-group-item-action d-flex align-items-center">
                    <i className="bx bx-lock-alt fs-xl opacity-60 me-2" />
                    Datos del evento
                  </Link>
                  <Link to="#" className="list-group-item list-group-item-action d-flex align-items-center">
                    <i className="bx bx-bell fs-xl opacity-60 me-2" />
                    Boletos de evento
                  </Link>
                  <Link to="#" className="list-group-item list-group-item-action d-flex align-items-center">
                    <i className="bx bx-chat fs-xl opacity-60 me-2" />
                    Resumen
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
