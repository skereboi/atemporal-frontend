import React from 'react'

export const NothingToShow = (props) => {
  const {
    title = 'Nada que mostrar',
    subtitle = 'Esta lista esta vacia',
    message
  } = props

  return (
  <div className="alert alert-info mb-0" role="alert">
  <h4 className="pt-2 alert-heading">{ title }</h4>
  <p className="pt-2 mb-8 fs-5">{ subtitle }</p>
  <hr className="opacity-100 my-0" />
      <p className="pt-2 mb-2 fs-2">{message}</p>
  </div>
  )
}
