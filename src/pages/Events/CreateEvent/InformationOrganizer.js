import React from 'react'
import { useStateMachine } from 'little-state-machine'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { updateCreateEvent } from './actions'
import { useNavigate } from 'react-router-dom'
import { SchemaOrganizer } from './schemas'
import { AlertErrorForm } from '../../../components/AlertErrorForm'
export const InformationOrganizer = () => {
  const { actions, state: { createEvent } } = useStateMachine({ updateCreateEvent })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(SchemaOrganizer),
    defaultValues: createEvent
  })
  const navigate = useNavigate()
  const onSubmit = (data) => {
    actions.updateCreateEvent({ payload: data })
    navigate('informacion-evento')
  }

  return (
    <>
      <h1 className="h2 pt-xl-1 pb-3">Información del organizador</h1>
      {/* Basic info */}
      <h2 className="h5 text-primary mb-4">Datos del organizador</h2>
      <form className="border-bottom pb-3 pb-lg-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="row pb-2">
          <div className="col-sm-12 mb-4">
            <label htmlFor="fn" className="form-label fs-base">Nombre del organizador</label>
            <input type="text"
              id="fn" className="form-control form-control-lg"
              {...register('nombre_organizador')}
            />
            {errors.nombre_organizador && (<AlertErrorForm messageError={errors.nombre_organizador.message} />)}

          </div>
          <div className="col-sm-6 mb-4">
            <label htmlFor="sn" className="form-label fs-base">Celular principal</label>
            <input type="text" id="sn"
              className="form-control form-control-lg"
              {...register('celular_principal')}
            />
            {errors.celular_principal && (<AlertErrorForm messageError={errors.celular_principal.message} />)}
          </div>
          <div className="col-sm-6 mb-4">
            <label htmlFor="sn" className="form-label fs-base">Celular secundario</label>
            <input type="text" id="sn"
              className="form-control form-control-lg"
              {...register('celular_secundario')}
            />
            {errors.celular_secundario && (<AlertErrorForm messageError={errors.celular_secundario.message} />)}
          </div>
        </div>
        <div className="d-flex mb-3">
          <button type="submit" className="btn btn-primary" >Siguiente</button>
        </div>
      </form>
    </>
  )
}
