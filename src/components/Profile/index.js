import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { MenuMobile } from '../MenuAuthenticated'
import './style.scss'

export const Profile = () => {
  const { user, logout } = useAuth()

  const handlerToggle = () => {
    document.getElementById('dropdown-menu').classList.toggle('show')
  }
  return (
    <>
      <div className="btn-group dropdown">
        <button type="button" className='btn btn-primary btn-sm d-none d-lg-inline-flex dropdown-toggle' data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="bx bx-user fs-5 lh-1 me-1" />
          {user.nombre}
        </button>
        <i
          className="bx bx-menu-alt-right bx-lg text-light d-lg-none"
          onClick={handlerToggle} />
        <div className="dropdown-menu my-1" id='dropdown-menu'>
          <Link to={user.typeUser === 'admin' ? 'dashboard/mi-cuenta' : '/mi-cuenta'} className="dropdown-item">
            Mi cuenta
          </Link>
          <div className="menu-mobile text-primary">
            <MenuMobile />
          </div>
          <div className="dropdown-divider" />
          <button onClick={() => logout()} className="dropdown-item">Cerrar sesión</button>
        </div>
      </div>

    </>
  )
}
