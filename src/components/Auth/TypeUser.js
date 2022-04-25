import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export const TypeUser = () => {
  const auth = useAuth()
  if (auth.user) {
    if (auth.user.typeUser === 'admin') {
      return <Navigate to="/dashboard"/>
    } else if (auth.user.typeUser === 'general') {
      return <Navigate to="/eventos" />
    }
  }
}
