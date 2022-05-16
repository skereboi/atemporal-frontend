/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useStateMachine } from 'little-state-machine'
import { clearAction } from './actions'
import { initialStates } from '../../../hooks/useLittleMachine'
import Select from 'react-select'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { AlertErrorForm } from '../../../components/AlertErrorForm'
import { mainSchemaCreateEvent } from './schemas'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useNavigate } from 'react-router-dom'
import { FormButtons } from '../../../components/Events/FormButtons'
export const InformationSummary = () => {
  const navigate = useNavigate()
  const [submitted, setSubmitted] = useState(false)
  const { actions, state: { createEvent } } = useStateMachine({ clearAction })
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(mainSchemaCreateEvent),
    defaultValues: createEvent
  })
  const { fields } = useFieldArray({ control, name: 'boletos' })
  const onSubmit = (data) => {
    alert('Backend')
    setTimeout(() => {
      setSubmitted(true)
    }, 1000)
  }
  return (
    <>
      {
        submitted
          ? (
            <>
              <p>Tu evento esta revisión</p>
              {
                JSON.stringify(createEvent)
              }
            </>
            )
          : (
            <form className="summary-container" onSubmit={handleSubmit(onSubmit)}>
              <h1 className="h2 pt-xl-1 pb-3">Resumen</h1>
              <div className='section-summary'>
                {/* Organizer */}
                <h2 className="h5 text-primary mb-4">Datos del organizador</h2>
                <div className="border-bottom pb-3 pb-lg-4">
                  <div className="row pb-2">
                    <div className="col-sm-12 mb-4">
                      <label htmlFor="fn" className="form-label fs-base">Nombre del organizador</label>
                      <input type="text"
                        id="fn" className="form-control form-control-lg"
                        {...register('nombre_organizador')}
                        disabled
                      />
                      {errors.nombre_organizador && (<AlertErrorForm messageError={errors.nombre_organizador.message} />)}

                    </div>
                    <div className="col-sm-6 mb-4">
                      <label htmlFor="sn" className="form-label fs-base">Celular principal</label>
                      <input type="text" id="sn"
                        className="form-control form-control-lg"
                        {...register('celular_principal')}
                        disabled
                      />
                      {errors.celular_principal && (<AlertErrorForm messageError={errors.celular_principal.message} />)}
                    </div>
                    <div className="col-sm-6 mb-4">
                      <label htmlFor="sn" className="form-label fs-base">Celular secundario</label>
                      <input type="text" id="sn"
                        className="form-control form-control-lg"
                        {...register('celular_secundario')}
                        disabled
                      />
                      {errors.celular_secundario && (<AlertErrorForm messageError={errors.celular_secundario.message} />)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-sumary">
                <h2 className="h5 text-primary mb-4">Datos del evento</h2>
                <div className="border-bottom pb-3 pb-lg-4" onSubmit={handleSubmit(onSubmit)}>
                  <div className="row pb-2">
                    <div className="col-sm-12 mb-4">
                      <label htmlFor="nombre_evento" className="form-label fs-base">Nombre del evento</label>
                      <input type="text"
                        id="nombre_evento" className="form-control form-control-lg"
                        {...register('nombre_evento')}
                        disabled
                      />
                      {errors.nombre_evento && (<AlertErrorForm messageError={errors.nombre_evento.message} />)}
                    </div>
                    <div className="col-sm-12 mb-4">
                      <label htmlFor="descripcion" className="form-label fs-base">Descripcion del evento</label>
                      <textarea type="text"
                        id="descripcion" className="form-control form-control-lg"
                        {...register('descripcion')}
                        disabled
                      />
                      {errors.descripcion && (<AlertErrorForm messageError={errors.descripcion.message} />)}
                    </div>
                    <div className="col-sm-4 mb-4">
                      <label htmlFor="fecha_evento" className="form-label fs-base">Fecha de evento</label>
                      <input type="date" id="fecha_evento"
                        className="form-control form-control-lg"
                        {...register('fecha_evento')}
                        disabled
                      />
                      {errors.fecha_evento && (<AlertErrorForm messageError={errors.fecha_evento.message} />)}
                    </div>
                    <div className="col-sm-4 mb-4">
                      <label htmlFor="hora_inicio" className="form-label fs-base">Hora inicio</label>
                      <input type="time"
                        id="hora_inicial"
                        className="form-control form-control-lg"
                        disabled
                        {...register('hora_inicio')}
                      />
                      {errors.hora_inicio && (<AlertErrorForm messageError={errors.hora_inicio.message} />)}
                    </div>
                    <div className="col-sm-4 mb-4">
                      <label htmlFor="hora_final" className="form-label fs-base">Hora final</label>
                      <input type="time"
                        id="hora_inicial"
                        className="form-control form-control-lg"
                        disabled
                        {...register('hora_final')}
                      />
                      {errors.hora_final && (<AlertErrorForm messageError={errors.hora_final.message} />)}
                    </div>
                    <div className="col-sm-6 mb-4">
                      <label htmlFor="lugar" className="form-label fs-base">Nombre del lugar</label>
                      <input type="text" id="lugar"
                        className="form-control form-control-lg"
                        {...register('lugar')}
                        disabled
                      />
                      {errors.lugar && (<AlertErrorForm messageError={errors.lugar.message} />)}
                    </div>
                    <div className="col-sm-6 mb-4">
                      <label htmlFor="ubicacion_maps" className="form-label fs-base">Selecciona la ubicación en maps</label>
                      <input type="text" id="ubicacion_maps"
                        className="form-control form-control-lg"
                        {...register('ubicacion_maps')}
                        disabled
                      />
                      {errors.ubicacion_maps && (<AlertErrorForm messageError={errors.ubicacion_maps.message} />)}
                    </div>
                    <div className="col-sm-12 mb-4">
                      <label htmlFor="direccion" className="form-label fs-base">Dirección del evento</label>
                      <textarea type="text"
                        id="direccion" className="form-control form-control-lg"
                        {...register('direccion')}
                        disabled
                      />
                      {errors.direccion && (<AlertErrorForm messageError={errors.direccion.message} />)}
                    </div>
                    <div className="col-sm-12 col-md-4 mb-4">
                      <label htmlFor="url_video" className="form-label fs-base">Url de video youtube (Opcional)</label>
                      <input type="text" id="url_video"
                        className="form-control form-control-lg"
                        {...register('url_video')}
                        disabled
                      />
                      {errors.url_video && (<AlertErrorForm messageError={errors.url_video.message} />)}
                    </div>
                    <div className="col-sm-12 col-md-4 mb-4">
                      <label htmlFor="itinerario_evento" className="form-label fs-base">Foto de evento</label>
                      <input type="text" id="itinerario_evento"
                        className="form-control form-control-lg"
                        {...register('foto_evento')}
                        disabled
                      />
                      {errors.foto_evento && (<AlertErrorForm messageError={errors.foto_evento.message} />)}
                    </div>
                    <div className="col-sm-12 col-md-4 mb-4">
                      <label htmlFor="itinerario_evento" className="form-label fs-base">Itinerario de evento (.pdf)</label>
                      <input type="text" id="itinerario_evento"
                        className="form-control form-control-lg"
                        {...register('itinerario_evento')}
                        disabled
                      />
                      {errors.itinerario_evento && (<AlertErrorForm messageError={errors.itinerario_evento.message} />)}
                    </div>
                    <div className="col-sm-12 mb-4">
                      <label htmlFor="categorias" className="form-label fs-base">Selecciona las categorias a las que pertenece tu evento</label>
                      <Controller
                        name="categorias"
                        control={control}
                        render={({ field }) =>
                          <Select
                            {...field}
                            placeholder="Selecciona tu categoria"
                            isMulti
                            isDisabled
                          />}
                      />
                      {errors.categorias && (<AlertErrorForm messageError={errors.categorias.message} />)}
                    </div>
                  </div>
                </div>
              </div>
              {/* TIckets */}
              <div className="section-summary">
                <h2 className="h5 text-primary mb-4">Información de boletos</h2>
                <div className="border-bottom pb-3 pb-lg-4" onSubmit={handleSubmit(onSubmit)}>
                  <div className="row pb-2">
                    <div className="col-sm-12 mb-4">
                      <div className="form-check">
                        <label htmlFor="tipo_cobro" className="form-label fs-base">¿Es evento de pago?</label>
                        <input
                          type="checkbox"
                          {...register('tipo_cobro')}
                          id="tipo_cobro"
                          className="form-check-input ml-4"
                          disabled
                        />
                      </div>
                      {errors.tipo_cobro && (<AlertErrorForm messageError={errors.tipo_cobro.message} />)}
                    </div>
                    {
                      (createEvent.tipo_cobro) && (<>

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
                                {...field}
                                placeholder="Métodos de pago"
                                isMulti
                                isDisabled
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
                              checked={createEvent.habra_boletos}
                              disabled
                            />
                          </div>
                        </div>

                        {errors.boletos && (<AlertErrorForm messageError={errors.boletos.message} />)}
                        {(createEvent.habra_boletos) && (
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
                                            disabled
                                          />
                                        )}
                                      />
                                    </div>

                                    <div className="mb-4">
                                      <label htmlFor="number-input" className="form-label">
                                        Cantidad de boletos disponibles
                                      </label>
                                      <Controller
                                        name={`boletos.${index}.cantidad`}
                                        control={control}
                                        render={({ field }) => (
                                          <input
                                            {...field}
                                            className="form-control"
                                            type="number"
                                            id="cantidad"
                                            disabled
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
                                            disabled
                                            className="form-control"
                                            type="number"
                                            id="precio"
                                          />
                                        )}
                                      />
                                    </div>
                                  </div>
                                )
                              })
                            }
                          </>
                        )}
                      </>
                      )
                    }

                  </div>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-sm-12 mb-4">
                  <div className="form-check">
                    <label htmlFor="acepto_terminos" className="form-label fs-base">
                      He leído y acepto los términos y condiciones.
                      <Link to="/terminos-condiciones" className='text-muted'> Ver términos y condiciones</Link>
                    </label>
                    <input
                      type="checkbox"
                      {...register('acepto_terminos')}
                      id="acepto_terminos"
                      className="form-check-input ml-4"
                    />
                  </div>
                  {errors.acepto_terminos && (<AlertErrorForm messageError={errors.acepto_terminos.message} />)}
                </div>
              </div>
              <div className="mt-4">
                <FormButtons backPage="/crear-evento/informacion-evento" msgNextBtn="Crear evento" />
              </div>
            </form >
            )

    }
    </>
  )
}
