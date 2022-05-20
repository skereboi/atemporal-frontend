
import React from 'react'

export const TextFinder = ({ setTextToFind }) => {
  const handlerOnChange = (event) => {
    // console.log(event.target.value)
    setTextToFind(event.target.value)
  }
  return (
        <div className="col-lg-7 col-sm-6">
        <div className="input-group">
          <input type="text" onChange={handlerOnChange} className="form-control pe-5 rounded" placeholder="Buscar eventos" />
          <i className="bx bx-search position-absolute top-50 end-0 translate-middle-y me-3 zindex-5 fs-lg" />
        </div>
      </div>
  )
}
