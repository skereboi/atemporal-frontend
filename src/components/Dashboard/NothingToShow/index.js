import React from 'react'

export const NothingToShow = ({
  title = 'Lo sentimos',
  subtitle = 'Ejemplo',
  message = ''
}) => {
  return (
    <div className="card text-center">
      <div className="card-header">{ title }</div>
      <div className="card-body">
        <h4 className="card-title">{ subtitle }</h4>
        <p className="card-text">{ message }</p>
      </div>
      <div className="card-footer fs-sm text-muted">Texto fijo</div>
    </div>

  )
}
