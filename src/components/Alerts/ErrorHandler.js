import React from 'react'
import { useGeneralApp } from '../../hooks/useGeneralApp'
import './style.scss'

export const ErrorHandler = ({ message }) => {
  const { setErrorMessage } = useGeneralApp()
  return (
    <div className="alert d-flex alert-danger alert-error mb-4 d-flex flex-column style-error" role="alert">
      <i className="bx bx-block lead me-3" />
      {message}
      <button className='btn btn-danger btn-sm' onClick={() => setErrorMessage(false)}>Entendido</button>
    </div>
  )
}
