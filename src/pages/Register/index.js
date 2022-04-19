/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaRegister } from './schemaRegister'

export const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaRegister)
  })

  const onSubmit = (data) => {
    alert('send')
    console.log(data)
  }

  return (
    <>
      {/* Page content */}
      <div className="container d-flex flex-wrap justify-content-center justify-content-xl-start pt-5">
        <div className="w-100 align-self-end pt-1 pt-md-4 pb-4" style={{ maxWidth: 526 }}>
          <h1 className="text-center text-xl-start">Crear cuenta</h1>
          <p className="text-center text-xl-start pb-3 mb-3">¿Ya tienes una cuenta?<Link to="/iniciar-sesion">Inicia sesión aqui.</Link></p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-sm-6">
                <div className="position-relative mb-4">
                  <label htmlFor="name" className="form-label fs-base">
                    Nombre completo</label>
                  <input type="text" id="name" className="form-control form-control-lg" {...register('nombre')} autoComplete="off"/>
                  <div>
                    {errors.nombre?.message}
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="position-relative mb-4">
                  <label htmlFor="email" className="form-label fs-base">Correo electrónico</label>
                  <input type="email" id="email" className="form-control form-control-lg" {...register('email')} autoComplete="off"/>
                  <div>
                    {errors.email?.message}
                  </div>
                </div>
              </div>
              <div className="col-12 mb-4">
                <label htmlFor="celular" className="form-label fs-base">Celular</label>
                <div className="celular-toggle">
                  <input type="celular" id="celular" className="form-control form-control-lg" {...register('celular')} autoComplete="off" />
                  <div>
                    {errors.celular?.message}
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
              <div className="col-12 mb-4">
                <label htmlFor="password-confirm" className="form-label fs-base">Confirma tu contraseña</label>
                <div className="password-toggle">
                  <input type="password" id="password-confirm" className="form-control form-control-lg" {...register('confirmPassword')} autoComplete="off" />
                  <div>
                    {errors.confirmPassword?.message}
                  </div>
                </div>
              </div>
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
            <button type="submit" className="btn btn-primary shadow-primary btn-lg w-100">Crear cuenta</button>
          </form>
        </div>
        {/* Background */}
        <div className="position-absolute top-0 end-0 w-50 h-100 bg-position-center bg-repeat-0 bg-size-cover d-none d-xl-block" style={{ backgroundImage: 'url(assets/img/home/bg1.jpg)' }} />
      </div>
    </>
  )
}
