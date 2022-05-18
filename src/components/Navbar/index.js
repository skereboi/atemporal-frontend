import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { Profile } from '../Profile'

export const Navbar = () => {
  const { isAuthenticated } = useAuth()
  return (
    <header className="header navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container px-3">
        <Link to="/" className="navbar-brand pe-3">
          Atemporal
        </Link>
        {
          !isAuthenticated ? (<PublicButtons />) : <Profile/>
        }
      </div>
    </header>

  )
}

const PublicButtons = () => {
  const location = useLocation()
  return (
    <>
      <button type="button" className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <Link to={location.pathname === '/iniciar-sesion' ? 'registrarse' : 'iniciar-sesion'} className="btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex">
        {location.pathname === '/iniciar-sesion' ? 'Registrarse' : 'Iniciar sesión'}
      </Link>

    </>
  )
}
