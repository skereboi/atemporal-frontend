import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { reservationService } from '../../../services/reservation.service'
import React from 'react'
import { AlertErrorForm } from '../../AlertErrorForm'
import Select from 'react-select'
import { useGeneralApp } from '../../../hooks/useGeneralApp'

export const ModalReservation = ({ event }) => {
  const { setErrorMessage, isLoading, setIsLoading } = useGeneralApp()
  const { watch, register, handleSubmit, control, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const tipoBoleto = watch('boleto')
  const onSubmit = async (data) => {
    try {
      setIsLoading(true)
      const dataToRegister = {
        id_boleto: data.boleto.value,
        cantidad: parseInt(data.cantidad),
        id_evento: event.id_evento
      }
      console.log(dataToRegister)
      await reservationService.createReservation(dataToRegister)
      document.getElementById('cerrar').click()
      navigate(`/reserva/${event.id_evento}`)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
      setErrorMessage(error.response.data.msg)
    }
  }

  const handlerReserservation = async () => {
    try {
      setIsLoading(true)
      const dataToRegister = {
        id_boleto: null,
        cantidad: null,
        id_evento: event.id_evento
      }
      console.log(dataToRegister)
      await reservationService.createReservation(dataToRegister)
      console.log(`/reserva/${event.id_evento}`)
      document.getElementById('cerrar').click()
      navigate(`/reserva/${event.id_evento}`)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
      setErrorMessage(error.response.data.msg)
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
                      <button type="button" id='cerrar' className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                      <button disabled={isLoading} type="submit" className="btn btn-primary">Pagar</button>
                    </div>
                  </form>
                  )
                : (
                  <>
                    <p>Da clic en registrar para asistir al evento</p>
                    <div className="modal- d-flex justify-content-between p-4">
                      <button type="button" id='cerrar' className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                      <button type="button" disabled={isLoading} onClick={handlerReserservation} className="btn btn-primary">Registrarse</button>
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
