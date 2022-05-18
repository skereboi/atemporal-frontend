import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { AlertErrorForm } from '../../../../components/AlertErrorForm'
import { InputPassword } from '../../../../components/InputPassword'
import { useGeneralApp } from '../../../../hooks/useGeneralApp'
import { userService } from '../../../../services/user.service'
import { schemaCreateUser } from './schemaUser'

export const CreateUsers = () => {
  const { setErrorMessage, isLoading, setIsLoading } = useGeneralApp()
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schemaCreateUser)
  })

  const onSubmit = async (data) => {
    setIsLoading(true)
    const userAdmin = {
      nombre: data.nombre,
      email: data.email,
      celular: data.celular,
      password: data.password,
      typeUser: 'admin'
    }

    try {
      await userService.createOneUser(userAdmin)
      setIsLoading(false)
      reset()
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
      <div className="row mb-5 justify-content-center">
        <div className="col-md-8">
          <h1>Crear usuario</h1>
        </div>
        <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
          <Link to="/dashboard/usuarios" className='btn btn-sm btn-primary'>Regresar</Link>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-12">
                <div className="position-relative mb-4">
                  <label htmlFor="name" className="form-label fs-base">
                    Nombre completo</label>
                  <input type="text" id="name" className="form-control form-control-lg" {...register('nombre')} autoComplete="off" />
                  <div>
                    <AlertErrorForm messageError={errors.nombre?.message} />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="position-relative mb-4">
                  <label htmlFor="email" className="form-label fs-base">Correo electrónico</label>
                  <input type="email" id="email" className="form-control form-control-lg" {...register('email')} autoComplete="off" />
                  <AlertErrorForm messageError={errors.email?.message}/>
                </div>
              </div>
              <div className="col-12 mb-4">
                <label htmlFor="celular" className="form-label fs-base">Celular</label>
                <div className="celular-toggle">
                  <input type="celular" id="celular" className="form-control form-control-lg" {...register('celular')} autoComplete="off" />
                  <AlertErrorForm messageError={errors.celular?.message} />
                </div>
              </div>
              <InputPassword register={register} errors={errors} />
            </div>
            <button type="submit" className="btn btn-primary shadow-primary btn-lg w-100" disabled={isLoading}>Crear usuario</button>
          </form>
        </div>
      </div>
    </>
  )
}
