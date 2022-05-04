import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import './style.scss'

export const Profile = () => {
  const { user } = useAuth()
  return (
    <>

      <Link to={user.typeUser === 'admin' ? 'dashboard/mi-cuenta' : '/mi-cuenta'} className='btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex'>{user.nombre}</Link>

    </>
  )
}
