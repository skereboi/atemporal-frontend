import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth()
  return (
    <header className="header navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container px-3">
        <Link to="/" className="navbar-brand pe-3">
          Atemporal
        </Link>
        {
          !isAuthenticated ? (<PublicButtons />) : <Profile {...user} logout={logout}/>
        }
      </div>
    </header>

  )
}

const Profile = (props) => {
  const { nombre } = props
  return (
    <>
      <div>
        <Link to="/eventos" className='text-light p-4'>Eventos</Link>
        <Link to="/crear-evento" className='text-light p-4'>Crear evento</Link>
        <Link to="/mi-cuenta" className='btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex'>{nombre}</Link>
     </div>
    </>
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
        <i className="bx bx-cart fs-5 lh-1 me-1" />
        {location.pathname === '/iniciar-sesion' ? 'Registrarse' : 'Iniciar sesión'}
      </Link>

    </>
  )
}
