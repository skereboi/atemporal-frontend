/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaRegister } from './schemaRegister'
import { useGeneralApp } from '../../hooks/useGeneralApp'
import { useAuth } from '../../hooks/useAuth'
import { TypeUser } from '../../components/Auth/TypeUser'
import { InputPassword } from '../../components/InputPassword'

export const RegisterPage = () => {
  const { setErrorMessage, isLoading, setIsLoading } = useGeneralApp()

  const { registerAccount } = useAuth()
  const initialState = {
    nombre: 'Daniel',
    email: 'danielcu.sanchez@gmail.com',
    celular: '4421290231',
    password: 'general1234',
    confirmPassword: 'general1234'
  }

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaRegister),
    defaultValues: {}
  })

  const onSubmit = async (data) => {
    setIsLoading(true)
    const { nombre, email, celular, password } = data
    const account = {
      nombre,
      email,
      celular,
      password
    }

    try {
      await registerAccount(account)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      if (error.response.data.msg[0].type) {
        setErrorMessage('Revisa tu correo')
      } else {
        setErrorMessage(error.response.data.msg)
      }
    }
  }

  return (
    <>
      <TypeUser />
      {/* Page content */}
      <div className="container d-flex flex-wrap justify-content-center justify-content-xl-start pt-5">
        <div className="w-100 align-self-end pt-1 pt-md-4 pb-4" style={{ maxWidth: 526 }}>
          <h1 className="text-center text-xl-start">Crear cuenta</h1>
          <p className="text-center text-xl-start pb-3 mb-3">¿Ya tienes una cuenta?<Link to="/iniciar-sesion"> Inicia sesión aqui.</Link></p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-sm-6">
                <div className="position-relative mb-4">
                  <label htmlFor="name" className="form-label fs-base">
                    Nombre completo</label>
                  <input
                    type="text"
                    id="name"
                    placeholder='Ingresa tu nombre completo'
                    className="form-control form-control-lg"
                    {...register('nombre')} autoComplete="off" />
                  <div>
                    {errors.nombre?.message}
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="position-relative mb-4">
                  <label htmlFor="email" className="form-label fs-base">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    placeholder='Ingresa tu email'
                    className="form-control form-control-lg" {...register('email')} autoComplete="off" />
                  <div>
                    {errors.email?.message}
                  </div>
                </div>
              </div>
              <div className="col-12 mb-4">
                <label htmlFor="celular"
                  className="form-label fs-base">Celular</label>
                <div className="celular-toggle">
                  <input
                    type="celular"
                    id="celular"
                    placeholder='Ingresa tu celular'
                    className="form-control form-control-lg" {...register('celular')} autoComplete="off" />
                  <div>
                    {errors.celular?.message}
                  </div>
                </div>
              </div>
              <InputPassword register={register} errors={ errors}/>
              <InputPassword
                register={register}
                errors={errors}
                type="confirmPassword"
                title='Confirma tu contraseña'
              />
            </div>
            <div className="mb-4">
              <div className="form-check">
                <input type="checkbox" id="terms" className="form-check-input" {...register('terminos')} />
                <label htmlFor="terminos" className="form-check-label fs-base">Acepto <Link to="terminos-condiciones">Terminos y &amp; condiciones</Link></label>
                <div>
                  {errors.terminos?.message}
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary shadow-primary btn-lg w-100" disabled={isLoading}>Crear cuenta</button>
          </form>
        </div>
        {/* Background */}
        <div className="position-fixed top-0 end-0 w-50 h-100 bg-position-center bg-repeat-0 bg-size-cover d-none d-xl-block" style={{ backgroundImage: 'url(assets/img/home/bg1.jpg)' }} />
      </div>
    </>
  )
}
