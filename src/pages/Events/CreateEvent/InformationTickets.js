/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { useStateMachine } from 'little-state-machine'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { updateCreateEvent } from './actions'
import { useNavigate } from 'react-router-dom'
import { SchemaTickets } from './schemas'
import { AlertErrorForm } from '../../../components/AlertErrorForm'
import { FormButtons } from '../../../components/Events/FormButtons'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { paymentService } from '../../../services/paymet.services'

export const InformationTickets = () => {
  const animatedComponents = makeAnimated()
  const [paymentMethods, setPaymentMethods] = useState([])
  const { actions, state: { createEvent } } = useStateMachine({ updateCreateEvent })
  const { register, handleSubmit, watch, control, formState: { errors } } =
    useForm(
      {
        resolver: yupResolver(SchemaTickets),
        defaultValues: createEvent
      }
    )
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'boletos'
  })
  const navigate = useNavigate()
  const onSubmit = (data) => {
    actions.updateCreateEvent({ payload: data })
    console.log(createEvent, 'ESTADO TICKETS 🐊')
    navigate('/crear-evento/resumen')
  }
  const habra_boletos = watch('habra_boletos')
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
              <input
                type="checkbox"
                {...register('tipo_cobro')}
                id="tipo_cobro"
                className="form-check-input ml-4"
              />
            </div>
            {errors.tipo_cobro && (<AlertErrorForm messageError={errors.tipo_cobro.message} />)}
          </div>
          {
            (tipo_cobro || createEvent.tipo_cobro) && (<>

              <div className="col-sm-12 mb-4">
                <label
                  htmlFor="metodos_pago"
                  className="form-label fs-base">
                  Selecciona los métodos de pagos disponibles para el evento
                </label>
                {/* Metodos */}
                <Controller
                  name="metodos_pago"
                  control={control}
                  render={({ field }) =>
                    <Select
                      {...field} register
                      placeholder="Métodos de pago"
                      components={animatedComponents}
                      isMulti
                      options={paymentMethods}
                    />}
                />

                {errors.metodos_pago && (<AlertErrorForm messageError={errors.metodos_pago.message} />)}
              </div>
              <div className="col-sm-12 mb-4">
                <div className="form-check">
                  <label htmlFor="habra_boletos" className="form-label fs-base">¿Tendrás varios tipos de boletos?</label>
                  <input
                    type="checkbox"
                    {...register('habra_boletos')}
                    id="habra_boletos"
                    className="form-check-input ml-4"
                  />
                </div>
              </div>

              {errors.boletos && (<AlertErrorForm messageError={errors.boletos.message} />)}
              {(habra_boletos || createEvent.habra_boletos) && (
                <>
                  {
                    fields.map((item, index) => {
                      return (
                        <div key={item.id} className='form-control my-2'>
                          <div className="mb-4">
                            <label htmlFor="text-input" className="form-label">
                              Nombre del boleto
                            </label>
                            <Controller
                              name={`boletos.${index}.nombre`}
                              control={control}
                              render={({ field }) => (
                                <input
                                  {...field}
                                  className="form-control"
                                  type="text" id="text-input"
                                />
                              )}
                            />
                          </div>

                          <div className="mb-4">
                            <label htmlFor="number-input" className="form-label">
                              Cantidad de boletos disponibles
                            </label>
                            <Controller
                              name={ `boletos.${index}.cantidad`}
                              control={control}
                              render={({ field }) => (
                                <input
                                  {...field}
                                  className="form-control"
                                  type="number"
                                  id="cantidad"
                                />
                              )}
                            />

                          </div>

                          <div className="mb-4">
                            <label htmlFor="number-input" className="form-label">
                              Precio del boleto (MXN - Peso mexicano)
                            </label>
                            <Controller
                              name={`boletos.${index}.precio`}
                              control={control}
                              render={({ field }) => (
                                <input
                                  {...field}
                                  className="form-control"
                                  type="number"
                                  id="precio"
                                />
                              )}
                            />
                          </div>

                          <button
                            type="button"
                            className='btn btn-danger btn-sm'
                            onClick={() => remove(index)}
                          >
                            Eliminar boleto
                          </button>
                        </div>
                      )
                    })
                  }
                  <button type="button" className='btn btn-secondary btn-lg' onClick={() => append({})}>
                    Agregar boleto
                  </button>
                </>
              )}
              </>
            )
          }

        </div>
        <FormButtons backPage="/crear-evento/informacion-evento" />
      </form>
    </>
  )
}
