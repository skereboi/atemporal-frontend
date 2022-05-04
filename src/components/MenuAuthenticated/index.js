import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { Profile } from '../Profile'

export const MenuAuthenticated = (props) => {
  const { user } = useAuth()
  return (
    <>
      <div>
        <Link to={user.typeUser === 'admin' ? 'dashboard/eventos' : '/eventos'} className='text-light p-4'>Eventos</Link>
        <Link to={user.typeUser === 'admin' ? 'dashboard/crear-evento' : '/crear-evento'} className='text-light p-4'>Crear evento</Link>
        <Profile/>
      </div>
    </>
  )
}
