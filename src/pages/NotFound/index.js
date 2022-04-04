import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div>
      Lo sentimos no encontramos la página solicitada
      <Link to="/">Ir al home</Link>
    </div>
  )
}
