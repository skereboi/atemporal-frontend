import React from 'react'
import { useStateMachine } from 'little-state-machine'
import { useForm } from 'react-hook-form'
import updateAction from './updateAction'
import { useNavigate } from 'react-router-dom'
export const InformationOrganizer = () => {
  const { register, handleSubmit } = useForm()
  const { actions, state } = useStateMachine({ updateAction })
  const navigate = useNavigate()
  const onSubmit = (data) => {
    actions.updateAction(data)
    console.log(data)
    alert('e')
    navigate('informacion-evento')
  }

  return (
    <>
      <h1 className="h2 pt-xl-1 pb-3">Información del organizador</h1>
      {/* Basic info */}
      <h2 className="h5 text-primary mb-4">Datos del organizador</h2>
      <form className="needs-validation border-bottom pb-3 pb-lg-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="row pb-2">
          <div className="col-sm-6 mb-4">
            <label htmlFor="fn" className="form-label fs-base">Télefono principal</label>
            <input type="text"
              id="fn" className="form-control form-control-lg"
              {...register('celular_principal')}
              defaultValue={state.celular_principal}
            />
          </div>
          <div className="col-sm-6 mb-4">
            <label htmlFor="sn" className="form-label fs-base">Télefono de emergencia</label>
            <input type="text" id="sn"
              className="form-control form-control-lg"
              {...register('celular_secundario')}
              defaultValue={state.celular_secundario}
            />
          </div>
          <div className="col-sm-6 mb-4">
            <label htmlFor="email" className="form-label fs-base">Correo electrónico</label>
            <input type="email" id="email"
              className="form-control form-control-lg"
              {...register('email')}
              defaultValue={state.email}
            />
          </div>
        </div>
        <div className="d-flex mb-3">
          <input type="submit" className="btn btn-primary" />
        </div>
      </form>
    </>
  )
}
