import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { AlertErrorForm } from '../../../../components/AlertErrorForm'
import { useGeneralApp } from '../../../../hooks/useGeneralApp'
import { paymentService } from '../../../../services/payment.service'

export const CreatePayments = () => {
  const navigate = useNavigate()
  const { setErrorMessage, isLoading, setIsLoading } = useGeneralApp()
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = async (data) => {
    setIsLoading(true)

    try {
      await paymentService.createOnePayment(data)
      setIsLoading(false)
      reset()
      navigate(-1)
    } catch (error) {
      setIsLoading(false)
      if (error.response.data.msg[0].type) {
        setErrorMessage('ERROR FRONTEND')
      } else {
        setErrorMessage(error.response.data.msg)
      }
    }
  }
  return (
    <>
      <div className="row mb-5 justify-content-center">
        <div className="col-md-8">
          <h1>Crear método de pago</h1>
        </div>
        <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
          <Link to="/dashboard/metodos-pago" className='btn btn-sm btn-primary'>Regresar</Link>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-12">
                <div className="position-relative mb-4">
                  <label htmlFor="name" className="form-label fs-base">
                    Nombre del método</label>
                  <input type="text" id="name" className="form-control form-control-lg" {...register('nombre', { required: true })} autoComplete="off" />
                  <div>
                    <AlertErrorForm messageError={errors.nombre?.message} />
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary shadow-primary btn-lg w-100" disabled={isLoading}>Crear método</button>
          </form>
        </div>
      </div>
    </>
  )
}
