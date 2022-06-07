/* eslint-disable camelcase */
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { AlertErrorForm } from '../../AlertErrorForm'
import { ShareButton } from '../../ShareButton/Index'
import Select from 'react-select'
import { reservationService } from '../../../services/reservation.service'
export const RegisterToEvent = ({ event }) => {
  const location = useLocation()
  const url_evento = location.pathname
  return (
    <section className="container pt-5 mt-2 mt-lg-4 mt-xl-5">
      <div className="row">
        {/* Sidebar (Course summary) */}
        <aside className="col-lg-4 col-md-5 offset-xl-1 order-md-2 mb-5">
          <div style={{ marginTop: '-96px' }} />
          <div className="position-sticky top-0 pt-5">
            <div className="pt-5 mt-md-3">
              <div className="card shadow-sm p-sm-3">
                <div className="card-body">
                  <h4 className="mb-4">Reservación</h4>
                  <ul className="list-unstyled pb-3">
                    <li className="d-flex align-items-center mb-2">
                      <i className="bx bx-calendar-event fs-xl text-muted me-2 pe-1" />
                      {
                        event.tipo_cobro === 1 ? ('Evento de pago') : 'Evento gratuito'
                      }
                    </li>
                  </ul>
                  {
                    event.tipo_cobro === 1 && (
                      <>
                        <p className='text-muted'>Desde</p>
                        <del className="text-muted fs-xl fw-normal ms-2">
                          Antes
                          ${Math.min(...event.boletos.map(e => e.precio)) + 100} MXN
                        </del>
                      </>

                    )
                  }

                  {
                    event.tipo_cobro === 1 && (
                      <div className="h2 d-flex align-items-center mb-4">
                        $
                        {
                          Math.min(...event.boletos.map(e => e.precio))
                        }
                        MXN

                      </div>
                    )
                  }
                  <button type="button"
                    className="btn btn-primary btn-lg shadow-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#modalReserve"
                    data-bs-whatever="@mdo">
                    {
                      event.tipo_cobro === 1 ? 'Comprar boletos' : 'Registrarse en el evento'
                    }
                  </button>
                </div>
                <ShareButton url={url_evento} socialNetwork='facebook'/>
              </div>
            </div>
          </div>
        </aside>
        {/* Content */}
        <div className="col-xl-7 col-lg-8 col-md-7 order-md-1 mb-5">
          <h2 className="h1 pb-md-2 pb-lg-3">{event.nombre_evento}</h2>
          <p className="pb-4 mb-3">
            {
              event.descripcion
            }
          </p>
          <h3 className="mb-4">Detalle de ubicación</h3>
          <ul className="list-unstyled mb-5">
            <li className="d-flex align-items-center mb-2">
              <b>Ciudad:</b>{event.ciudad}
            </li>
            <li className="d-flex align-items-center mb-2">
              <b>Estado:</b>{event.estado}
            </li>
            <li className="d-flex align-items-center mb-2">
              <b>Lugar:</b>{event.lugar}
            </li>
            <li className="d-flex align-items-center mb-2">
              <b>Dirección:</b>{event.direccion}
            </li>
          </ul>
          <h2 className="h1 pt-md-2 pt-lg-4 pt-xl-5 pb-md-3 pb-lg-4 mb-md-4">Proceso de reserva</h2>
          <div className="steps steps-sm">
            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">1</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Inicia sesión</h4>
                <p className="mb-0">
                  Revisa disponibilidad
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">2</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Elige el tipo de boleto</h4>
                <p className="mb-0">
                  Selecciona el tipo de boleto que deseas adquirir
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">3</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Selecciona tu método de pago</h4>
                <p className="mb-0">
                  Aceptamos visa / mastercard. Utilizamos Sr Pago, como pasarela de pago.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">4</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Paga</h4>
                <p className="mb-0">
                  Comprar tu boleto, la plataforma te dara las siguientes instrucciones.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">5</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Confirmación de reserva</h4>
                <p className="mb-0">
                  Te llegara un correo con todos los detalles, incluyendo tu boleto digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalReserve event={event}/>
    </section>
  )
}

const ModalReserve = ({ event }) => {
  const { watch, register, handleSubmit, control, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const tipoBoleto = watch('boleto')
  const onSubmit = async (data) => {
    try {
      const dataToRegister = {
        id_boleto: data.boleto.value,
        cantidad: parseInt(data.cantidad),
        id_evento: event.id_evento
      }
      await reservationService.createReservation(dataToRegister)
      navigate(`/reserva/${event.id_evento}`)
      location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="modal fade" id="modalReserve" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Reserva de evento</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            {
              event.boletos?.length > 0
                ? (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='row'>
                      <h3>Selecciona tus boletos</h3>
                      <div className="col-6 mb-4">
                        <label htmlFor="boleto" className="form-label fs-base">Selecciona el estado</label>
                        <Controller
                          name="boleto"
                          control={control}
                          render={({ field }) =>
                            <Select
                              {...field}
                              placeholder="Selecciona el boleto"
                              options={event.boletos.filter(t => t.cantidad > 0).map(b => ({
                                label: `${b.nombre} - $ ${b.precio}`,
                                value: b.id_boleto
                              }))}
                            />}
                        />
                        {errors.boleto && (<AlertErrorForm messageError={errors.boleto.message} />)}
                      </div>
                      {
                        tipoBoleto && (
                          <div className="col-6">
                            <label htmlFor="boleto" className="form-label fs-base">Ingresa la cantidad</label>
                            <input
                              type="number"
                              {...register('cantidad')}
                              className='form-control'
                              placeholder={`Disponibles ${event.boletos?.filter(b => b.id_boleto === parseInt(tipoBoleto?.value))[0].cantidad}`}
                              max={event.boletos?.filter(b => b.id_boleto === parseInt(tipoBoleto?.value))[0].cantidad}
                              min='1'
                            />
                          </div>
                        )
                      }

                    </div>
                    <div className="modal- d-flex justify-content-between p-4">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                      <button type="submit" className="btn btn-primary">Pagar</button>
                    </div>
                  </form>
                  )
                : (
                  <>
                    <p>Da clic en registrar para asistir al evento</p>
                    <div className="modal- d-flex justify-content-between p-4">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                      <button type="button" className="btn btn-primary">Registrarse</button>
                    </div>
                  </>
                  )
            }
          </div>

        </div>
      </div>
    </div>
  )
}
