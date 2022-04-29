import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <div>
      Lo sentimos no encontramos la página solicitada 404
      <Link to="/">Ir al home</Link>
    </div>
  )
}
