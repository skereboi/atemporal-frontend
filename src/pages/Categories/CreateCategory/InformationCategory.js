import React from 'react'
import { AlertErrorForm } from '../../../components/AlertErrorForm'

export const InformationCategory = () => {

    return (
        <>
          <h1 className="h2 pt-xl-1 pb-3">Crea una nueva categoría</h1>
          {/* Basic info */}
          <form className="needs-validation border-bottom pb-3 pb-lg-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="row pb-2">
              <div className="col-sm-12 mb-4">
                <label htmlFor="fn" className="form-label fs-base">Nombre de la categoría</label>
                <input type="text"
                  id="fn" className="form-control form-control-lg"
                  {...register('nombre_categoria')}
                />
                {errors.nombre_categoria && (<AlertErrorForm messageError={errors.nombre_categoria.message} />)}
              </div>

              <div className="col-sm-6 mb-4">
                <label htmlFor="sn" className="form-label fs-base">Estado de la categoría</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Selecciona el estado</option>
                    <option value="1">Activa</option>
                    <option value="2">Inactiva</option>
                </select>
              </div>
            </div>
            <div className="d-flex mb-3">
              <button type="submit" className="btn btn-primary" >Siguiente</button>
            </div>
          </form>
        </>
      )
    }
}