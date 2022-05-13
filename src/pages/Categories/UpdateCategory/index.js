import React from 'react'

export const UpdateCategoryPage = () => {
  return (
    <>
    <h1 className="h2 pt-xl-1 pb-3">Editar categoría</h1>

      <div className="col-sm-6 mb-4">
      <label htmlFor="sn" className="form-label fs-base">Categorias</label>
      <select className="form-select" aria-label="Default select example">
          <option selected>Selecciona la categoría que desee modificar</option>
          <option value="1"></option>
          <option value="2"></option>
      </select>
    </div>
    <div className="d-flex mb-3">
          <button type="submit" className="btn btn-primary" >Siguiente</button>
        </div>
    </>
  )
}
