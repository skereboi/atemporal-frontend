import React from 'react'

export const ShareButton = ({ url, socialNetwork }) => {
  return (
    <button className="btn btn-lg btn-outline-secondary" >
      <i className={ `bx bxl-${socialNetwork} bx-lg`}/>
      <a href={`https://www.facebook.com/sharer.php?u=www.atemporal.art/${url}`}>
        Compartir {socialNetwork}
    </a>
  </button>
  )
}
