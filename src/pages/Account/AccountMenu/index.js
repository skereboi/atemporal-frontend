import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'

export const AccounteMenu = () => {
  const { user, logout } = useAuth()
  return (
    <>
      {/* Sidebar (User info + Account menu) */}
      <aside className="col-lg-3 col-md-4 border-end pb-5 mt-n5">
        <div className="position-sticky top-0">
          <div className="text-center pt-5">
            <div className="d-table position-relative mx-auto mt-2 mt-lg-4 pt-5 mb-3">
              {/* <img src="assets/img/avatar/18.jpg" className="d-block rounded-circle" width={120} alt="John Doe" /> */}
              {/* <button type="button" className="btn btn-icon btn-light bg-white btn-sm border rounded-circle shadow-sm position-absolute bottom-0 end-0 mt-4" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Change picture">
                  <i className="bx bx-refresh" />
                </button> */}
            </div>
            <h2 className="h5 mb-1">
              {user.nombre}
            </h2>
            <p className="mb-3 pb-3">{user.email}</p>
            <button type="button" className="btn btn-secondary w-100 d-md-none mt-n2 mb-3" data-bs-toggle="collapse" data-bs-target="#account-menu">
              <i className="bx bxs-user-detail fs-xl me-2" />
              Menú de cuenta
              <i className="bx bx-chevron-down fs-lg ms-1" />
            </button>
            <div id="account-menu" className="list-group list-group-flush collapse d-md-block">
              <Link to="/mi-cuenta" className="list-group-item list-group-item-action d-flex align-items-center ">
                <i className="bx bx-cog fs-xl opacity-60 me-2" />
                Detalle de cuenta
              </Link>
              <Link to="eventos" className="list-group-item list-group-item-action d-flex align-items-center">
                <i className="bx bx-credit-card-front fs-xl opacity-60 me-2" />
                Mis eventos
              </Link>
              <Link to="metodos-pago" className="list-group-item list-group-item-action d-flex align-items-center">
                <i className="bx bx-credit-card-front fs-xl opacity-60 me-2" />
                Métodos de pago
              </Link>
              <button onClick={() => logout()} className="list-group-item list-group-item-action d-flex align-items-center">
                <i className="bx bx-log-out fs-xl opacity-60 me-2" />
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
