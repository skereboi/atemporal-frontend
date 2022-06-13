/* eslint-disable no-unused-vars */
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { TypeUser } from '../../components/Auth/TypeUser'
import { useAuth } from '../../hooks/useAuth'
import { useGeneralApp } from '../../hooks/useGeneralApp'
import { authService } from '../../services/auth.service'
import { recoverPasswordSchema } from './schemaRecoverPassword'

export const RecoverPasswordPage = () => {
  const { setErrorMessage, isLoading, setIsLoading } = useGeneralApp()
  const [isSent, setIsSent] = useState(false)

  const generalState = {
    email: 'danielcu.sanchez@gmail.com'
  }
  const adminState = {
    email: 'danielcu@alternet.com.mx'
  }

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(recoverPasswordSchema),
    defaultValues: {}
  })

  const onSubmit = async (data) => {
    setIsLoading(true)
    const { email } = data
    try {
      const { msg } = await authService.recoverPassword(email)
      setIsLoading(false)
      alert(msg)
      setIsSent(true)
    } catch (error) {
      if (!error.response) {
        setErrorMessage('⚠️ Servicios desconectados, estamos en mantenimiento ⚠️')
      }
      if (error.response.data.msg[0].type) {
        setErrorMessage('Revisa tu correo')
      } else {
        setErrorMessage(error.response.data.msg)
      }
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Page content */}
      <TypeUser />
      <div className="container d-flex flex-wrap justify-content-center align-items-center justify-content-xl-start pt-5">
        <div className="w-100 align-self-end pt-1 pt-md-4 pb-4" style={{ maxWidth: 527 }}>
          {
            isSent
              ? (
                <>
                  <h1 className="text-center text-xl-start">Revisa tu bandeja de correo 😁</h1>
                  <Link to="/iniciar-sesion" className="btn btn-primary shadow-primary btn-lg w-100">Ir a inicio de sesión</Link>
                </>
                )
              : (
                <>
                  <h1 className="text-center text-xl-start">Recupera tu contraseña</h1>
                  <p className="text-center text-xl-start pb-3 mb-3">¿Recordaste tu contraseña?<Link to="/iniciar-sesion"> Inicia sesión.</Link></p>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-12">
                        <div className="position-relative mb-4">
                          <label htmlFor="email" className="form-label fs-base">Ingresa el correo electrónico</label>
                          <p>Si existe tu cuenta te llegará un correo con un enlace de recuperación.</p>
                          <input
                            type="email"
                            id="email"
                            placeholder='Ingresa tu email'
                            className="form-control form-control-lg"
                            {...register('email')} autoComplete="off"
                          />
                          <div>
                            {errors.email?.message}
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary shadow-primary btn-lg w-100" disabled={isLoading}>Recuperar contraseña</button>
                  </form>
                </>)
          }

        </div>
        {/* Background */}
        <div className="position-absolute top-0 end-0 w-50 h-100 bg-position-center bg-repeat-0 bg-size-cover d-none d-xl-block" style={{ backgroundImage: 'url(assets/img/home/bg2.jpg)' }} />
      </div>
    </>
  )
}
