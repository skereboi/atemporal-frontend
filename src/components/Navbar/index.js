import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { data } from '../../data'
import { useAuth } from '../../hooks/useAuth'
import { MenuAuthenticated } from '../MenuAuthenticated'

export const Navbar = () => {
  const { isAuthenticated } = useAuth()
  return (
    <header className="header navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container px-3">
        <Link to="/" className="navbar-brand pe-3">
          Atemporal
        </Link>
        {
          !isAuthenticated ? (<PublicButtons />) : <MenuAuthenticated/>
        }
      </div>
    </header>

  )
}

const PublicButtons = () => {
  const location = useLocation()
  return (
    <>
      <ul className="navbar-nav me-auto">
        {
          data
            .menuNavbar.public.options.map(
              op =>
                (
                <li key={op.id} className="nav-item">
                  <Link to={op.pathname}
                    className={`nav-link ${location.pathname === op.pathname && 'active'}`}>
                    {op.title}
                  </Link>
                </li>
                )
            )
        }
      </ul>
      <Link to={location.pathname === '/iniciar-sesion' ? 'registrarse' : 'iniciar-sesion'} className="btn btn-primary btn-sm fs-sm rounded">
        {location.pathname === '/iniciar-sesion' ? 'Registrarse' : 'Iniciar sesión'}
      </Link>
    </>
  )
}
