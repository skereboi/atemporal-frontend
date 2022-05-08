/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { useStateMachine } from 'little-state-machine'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import updateAction from './updateAction'
import { useNavigate } from 'react-router-dom'
import { SchemaOrganizer } from './schemas'
import { AlertErrorForm } from '../../../components/AlertErrorForm'
import { FormButtons } from '../../../components/Events/FormButtons'
import { CreateTicket } from '../../../components/Events/CreateTicket'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { paymentService } from '../../../services/paymet.services'

export const InformationTickets = () => {
  const animatedComponents = makeAnimated()
  const [paymentMethods, setPaymentMethods] = useState([])
  const { register, handleSubmit, watch, control, formState: { errors } } = useForm({ resolver: yupResolver(SchemaOrganizer) })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'boletos'
  })
  const { actions } = useStateMachine({ updateAction })
  const navigate = useNavigate()
  const onSubmit = (data) => {
    actions.updateAction(data)
    console.log(data)
    navigate('resumen')
  }
  const habraBoletos = watch('habraBoletos')
  const tipo_cobro = watch('tipo_cobro')

  useEffect(() => {
    const getPaymentMethods = async () => {
      const payments = await paymentService.getAllMethods()
      setPaymentMethods(payments.map(p => ({ label: p.nombre, value: p.id_metodo })))
    }
    getPaymentMethods()
  }, [])

  return (
    <>
      <h1 className="h2 pt-xl-1 pb-3">Información del boletaje</h1>
      {/* Basic info */}
      <h2 className="h5 text-primary mb-4">Información de boletos</h2>
      <form className="needs-validation border-bottom pb-3 pb-lg-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="row pb-2">
          <div className="col-sm-12 mb-4">
            <div className="form-check">
              <label htmlFor="tipo_cobro" className="form-label fs-base">¿Es evento de pago?</label>
              <input type="checkbox" id="tipo_cobro"
                className="form-check-input ml-4"
                {...register('tipo_cobro')}
              />
            </div>
            {errors.tipo_cobro && (<AlertErrorForm messageError={errors.tipo_cobro.message} />)}
          </div>
          {
            tipo_cobro && (<>

              <div className="col-sm-12 mb-4">
                <label htmlFor="metodos_pago" className="form-label fs-base">Selecciona los métodos de pagos disponibles para el evento</label>
                {/* Metodos */}
                <Controller
                  name="select"
                  {...register('metodos_pago')}
                  control={control}
                  render={({ field }) =>
                    <Select
                      {...field}
                      placeholder="Métodos de pago"
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      isMulti
                      options={paymentMethods}
                    />}
                />

                {errors.metodos_pago && (<AlertErrorForm messageError={errors.metodos_pago.message} />)}
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
                  {fields.map((t, index) => {
                    return (
                      <CreateTicket key={t.id} index={index} remove={remove} register={register} />
                    )
                  })}
                  <button type="button" className='btn btn-secondary btn-lg' onClick={() => append({})}>
                    Agregar boleto
                  </button>
                </>
              )}
            </>)
          }

        </div>
        <FormButtons backPage="/crear-evento/informacion-evento" />
      </form>
    </>
  )
}
