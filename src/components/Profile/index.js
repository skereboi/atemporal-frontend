import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { OptionsMenuAuth } from '../MenuAuthenticated'
import './style.scss'

export const Profile = () => {
  const { user, logout } = useAuth()
  return (
    <>
      <div className="btn-group dropdown profile-btn">
        <button type="button" className='btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex  dropdown-toggle' data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="bx bx-user fs-5 lh-1 me-1" />
          {user.nombre}
        </button>
        <div className="dropdown-menu my-1">
          <Link to={user.typeUser === 'admin' ? 'dashboard/mi-cuenta' : '/mi-cuenta'} className="dropdown-item">
            Mi cuenta
          </Link>
          <div className="menu-mobile">
            <OptionsMenuAuth />
          </div>
          <div className="dropdown-divider" />
          <button onClick={() => logout()} className="dropdown-item">Cerrar sesión</button>
        </div>
      </div>

    </>
  )
}
