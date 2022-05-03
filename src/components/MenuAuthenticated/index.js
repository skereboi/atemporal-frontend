import React from 'react'
import { Link } from 'react-router-dom'
import { Profile } from '../Profile'

export const MenuAuthenticated = (props) => {
  return (
    <>
      <div>
        <Link to="/eventos" className='text-light p-4'>Eventos</Link>
        <Link to="/crear-evento" className='text-light p-4'>Crear evento</Link>
        <Profile/>
      </div>
    </>
  )
}
