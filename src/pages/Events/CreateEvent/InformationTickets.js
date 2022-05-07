import React from 'react'
import { useStateMachine } from 'little-state-machine'
import { useFieldArray, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import updateAction from './updateAction'
import { useNavigate } from 'react-router-dom'
import { SchemaOrganizer } from './schemas'
import { AlertErrorForm } from '../../../components/AlertErrorForm'
import { FormButtons } from '../../../components/Events/FormButtons'
import { CreateTicket } from '../../../components/Events/CreateTicket'
export const InformationTickets = () => {
  const { register, handleSubmit, watch, control, formState: { errors } } = useForm({ resolver: yupResolver(SchemaOrganizer) })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'boletos'
  })
  const { actions, state } = useStateMachine({ updateAction })
  const navigate = useNavigate()
  const onSubmit = (data) => {
    actions.updateAction(data)
    navigate('resumen')
  }
  const habraBoletos = watch('habraBoletos')

  return (
    <>
      <h1 className="h2 pt-xl-1 pb-3">Información del boletaje</h1>
      {/* Basic info */}
      <h2 className="h5 text-primary mb-4">Información de boletos</h2>
      <form className="needs-validation border-bottom pb-3 pb-lg-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="row pb-2">
          <div className="col-sm-12 mb-4">
            <label htmlFor="tipo_cobro" className="form-label fs-base">¿Es evento de pago?</label>
            <input type="text"
              id="tipo_cobro" className="form-control form-control-lg"
              {...register('tipo_cobro')}
            />
            {errors.tipo_cobro && (<AlertErrorForm messageError={errors.tipo_cobro.message} />)}

          </div>
          <div className="col-sm-12 mb-4">
            <label htmlFor="metodos_pago" className="form-label fs-base">Selecciona los métodos de pagos disponibles para el evento</label>
            <input type="text" id="metodos_pago"
              className="form-control form-control-lg"
              {...register('metodos_pago')}
              defaultValue={state.metodos_pago}
            />
            {errors.celular_principal && (<AlertErrorForm messageError={errors.celular_principal.message} />)}
          </div>
          <div className="col-sm-12 mb-4">
            <div className="form-check">
              <label htmlFor="habraBoletos" className="form-label fs-base">¿Tendrás varios tipos de boletos?</label>
              <input type="checkbox" id="habraBoletos"
                className="form-check-input ml-4"
                {...register('habraBoletos')}
              />
            </div>
          </div>

          {habraBoletos && (
            <>
            <div>
              {fields.map((ticket, index) => {
                return (
                  <CreateTicket key={index} index={index} remove={remove} register={register} />
                )
              })}
            </div>
              <button type="button" className='btn btn-secondary btn-lg' onClick={() => append({})}>
                Agregar boleto
              </button>
            </>
          )}
        </div>
        <FormButtons backPage="/crear-evento/informacion-evento" />
      </form>
    </>
  )
}
