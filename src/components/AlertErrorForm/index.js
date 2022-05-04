import React from 'react'
import './style.scss'

export const AlertErrorForm = ({ messageError }) => {
  return (
    <div className="alert-danger d-flex align-items-center" role="alert">
      {messageError}
    </div>
  )
}
// 164540
