import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { Profile } from '../Profile'
import './style.scss'

export const MenuAuthenticated = () => {
  return (
    <>
      <div className='menu-authenticated'>
        <div className="menu-web">
          <OptionsMenuAuth/>
        </div>

        <Profile/>
      </div>
    </>
  )
}
export const OptionsMenuAuth = () => {
  const { user } = useAuth()
  return (
    <>
      <Link to={user.typeUser === 'admin' ? 'dashboard/aprobar' : '/eventos'} className='text-light p-4'>
        {
          user.typeUser === 'general' ? 'Eventos' : 'Aprobar eventos'
        }
      </Link>
      {
        user.typeUser === 'general' && (<Link to='/crear-evento' className='text-light p-4'>Crear evento</Link>)
      }
      {
        user.typeUser === 'admin' && (<Link to='dashboard/eventos' className='text-light p-4'>Eventos aprobados</Link>)
      }
    </>
  )
}
