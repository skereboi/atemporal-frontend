/* eslint-disable no-unused-vars */
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { TypeUser } from '../../components/Auth/TypeUser'
import { useAuth } from '../../hooks/useAuth'
import { useGeneralApp } from '../../hooks/useGeneralApp'
import { schemaLogin } from './schemaLogin'

export const LoginPage = () => {
  const { setErrorMessage, isLoading, setIsLoading } = useGeneralApp()

  const { login } = useAuth()
  const generalState = {
    email: 'danielcu.sanchez@gmail.com',
    password: 'general1234'
  }
  const adminState = {
    email: 'danielcu@alternet.com.mx',
    password: 'admin1234'
  }

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaLogin),
    defaultValues: generalState
  })

  const onSubmit = async (data) => {
    setIsLoading(true)
    const { email, password } = data
    const account = {
      email,
      password
    }

    try {
      await login(account)
      setIsLoading(false)
    } catch (error) {
      console.log(error.response.data.msg)
      console.log(error.status)
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
      <TypeUser/>
      <div className="container d-flex flex-wrap justify-content-center align-items-center justify-content-xl-start pt-5">
        <div className="w-100 align-self-end pt-1 pt-md-4 pb-4" style={{ maxWidth: 527 }}>
          <h1 className="text-center text-xl-start">Iniciar sesión</h1>
          <p className="text-center text-xl-start pb-3 mb-3">¿No tienes una cuenta?<Link to="/registrarse"> Crea tu cuenta aqui.</Link></p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">

              <div className="col-12">
                <div className="position-relative mb-4">
                  <label htmlFor="email" className="form-label fs-base">Correo electrónico</label>
                  <input type="email" id="email" className="form-control form-control-lg" {...register('email')} autoComplete="off" />
                  <div>
                    {errors.email?.message}
                  </div>
                </div>
              </div>

              <div className="col-12 mb-4">
                <label htmlFor="password" className="form-label fs-base">Contraseña</label>
                <div className="password-toggle">
                  <input type="password" id="password" className="form-control form-control-lg" {...register('password')} autoComplete="off" />
                  <div>
                    {errors.password?.message}
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary shadow-primary btn-lg w-100" disabled={isLoading}>Iniciar sesión</button>
          </form>
          <p className="text-center text-xl-start pt-4 mb-3">Recuperar contraseña <Link to="/recuperar-password"> Ingresa aqui.</Link></p>

        </div>
        {/* Background */}
        <div className="position-absolute top-0 end-0 w-50 h-100 bg-position-center bg-repeat-0 bg-size-cover d-none d-xl-block" style={{ backgroundImage: 'url(assets/img/home/bg2.jpg)' }} />
      </div>
    </>
  )
}
