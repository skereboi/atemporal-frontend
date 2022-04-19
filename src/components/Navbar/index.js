import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Navbar = () => {
  const location = useLocation()
  return (
    <header className="header navbar navbar-expand-lg navbar-light position-absolute navbar-sticky">
      <div className="container px-3">
        <Link to="/" className="navbar-brand pe-3">
          Atemporal
        </Link>
        <div id="navbarNav" className="offcanvas offcanvas-end">
          <div className="offcanvas-header border-bottom">
            <h5 className="offcanvas-title">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-footer border-top">
            <Link to="iniciar-sesion" className="btn btn-primary w-100">
              <i className="bx bx-cart fs-4 lh-1 me-1" />
              {location.pathname === '/iniciar-sesion' ? 'Registrarse' : 'Iniciar sesión'}
            </Link>
          </div>
        </div>
        <button type="button" className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <Link to={location.pathname === '/iniciar-sesion' ? 'registrarse' : 'iniciar-sesion'}className="btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex">
          <i className="bx bx-cart fs-5 lh-1 me-1" />
          {location.pathname === '/iniciar-sesion' ? 'Registrarse' : 'Iniciar sesión'}
        </Link>
      </div>
    </header>

  )
}
