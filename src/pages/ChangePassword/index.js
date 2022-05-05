/* eslint-disable no-unused-vars */
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { TypeUser } from '../../components/Auth/TypeUser'
import { useAuth } from '../../hooks/useAuth'
import { useGeneralApp } from '../../hooks/useGeneralApp'
import { authService } from '../../services/auth.service'
import { schemaChangePassword } from './schemaChangePassword'

export const ChangePasswordPage = () => {
  const { setErrorMessage, isLoading, setIsLoading } = useGeneralApp()
  const { idCode } = useParams()
  const navigate = useNavigate()
  console.log(idCode, 'use PARAMS')

  const generalState = {
    password: 'general1234',
    confirmPassword: 'general1234'
  }
  const adminState = {
    password: 'admin1234',
    confirmPassword: 'admin1234'
  }

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaChangePassword),
    defaultValues: adminState
  })

  const onSubmit = async (data) => {
    setIsLoading(true)
    const { password } = data
    try {
      const { msg } = await authService.changePassword(password, idCode)
      alert(msg)
      setIsLoading(false)
      navigate('/iniciar-sesion')
    } catch (error) {
      console.log(error.response.data.msg)
      setErrorMessage(`⚠️${error.response.data.msg}⚠️`)
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Page content */}
      <TypeUser />
      <div className="container d-flex flex-wrap justify-content-center align-items-center justify-content-xl-start pt-5">
        <div className="w-100 align-self-end pt-1 pt-md-4 pb-4" style={{ maxWidth: 527 }}>
          <h1 className="text-center text-xl-start">Cambiar contraseña</h1>
          <p className="text-center text-xl-start pb-3 mb-3">¿Recordaste tu contraseña?<Link to="/iniciar-sesion"> Inicia sesión.</Link></p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-12">
                <div className="position-relative mb-4">
                  <label htmlFor="password" className="form-label fs-base">Ingresa tu nueva contraseña</label>
                  <input type="password" id="password" className="form-control form-control-lg" {...register('password')} autoComplete="off" />
                  <div>
                    {errors.password?.message}
                  </div>
                  <label htmlFor="password" className="form-label fs-base mt-4">Confirma tu nueva contraseña</label>
                  <input type="password" id="confirmPassword" className="form-control form-control-lg" {...register('confirmPassword')} autoComplete="off" />
                  <div>
                    {errors.confirmPassword?.message}
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary shadow-primary btn-lg w-100" disabled={isLoading}>Recuperar contraseña</button>
          </form>

        </div>
        {/* Background */}
        <div className="position-absolute top-0 end-0 w-50 h-100 bg-position-center bg-repeat-0 bg-size-cover d-none d-xl-block" style={{ backgroundImage: 'url(assets/img/home/bg2.jpg)' }} />
      </div>
    </>
  )
}
