import React, { useState } from 'react'

import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { LoginPage } from '../../pages/Login'

export const AuthGuard = (props) => {
  const { typeUser } = props
  const auth = useAuth()
  const location = useLocation()
  const [requestedLocation, setRequestedLocation] = useState(null)

  if (!auth.isAuthenticated) {
    if (location.pathname !== requestedLocation) {
      setRequestedLocation(location.pathname)
    }

    return <LoginPage />
  }

  // This is done so that in case the route changes by any chance through other
  // means between the moment of request and the render we navigate to the initially
  // requested route.
  if (requestedLocation && location.pathname !== requestedLocation) {
    setRequestedLocation(null)
    return <Navigate to={requestedLocation} />
  }

  if (auth.user.typeUser === typeUser) {
    return <Outlet/>
  } else {
    return <Navigate to="/permisos" />
  }
}
