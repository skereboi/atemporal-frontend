/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { AlertErrorForm } from '../../../components/AlertErrorForm'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from '../../../hooks/useAuth'
import { useGeneralApp } from '../../../hooks/useGeneralApp'
import { whoIamService } from '../../../services/auth.service'
import { userService } from '../../../services/user.service'
import { schemaUpdateUser } from './schemaDetail'
import { ClabeInterbancaria } from './ClabeInterbancari'
export const AccountDetail = () => {
  const { isLoading, setIsLoading } = useGeneralApp()

  const { user } = useAuth()
  const [isUpdated, setIsUpdated] = useState(false)

  useEffect(() => {
    const getAccountUser = async () => {
      try {
        await whoIamService()
      } catch (error) {
        alert('Error')
        console.log(error)
      }
    }
    getAccountUser()
  }, [isUpdated])

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaUpdateUser),
    defaultValues: user
  })

  const onSubmit = async (data) => {
    try {
      setIsLoading(true)
      console.log(data)
      await userService.updateOneUser(parseInt(user.id_usuario), data)
      setIsUpdated(!isUpdated)
      setIsLoading(false)
      location.reload()
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Account details */}
      <div className="ps-md-3 ps-lg-0 mt-md-2 py-md-4">
        <h1 className="h2 pt-xl-1 pb-3">Detalle de cuenta</h1>
        {/* Basic info */}
        <h2 className="h5 text-primary mb-4">Información</h2>
        <form className="border-bottom pb-3 pb-lg-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="row pb-2">
            <div className="col-sm-12 mb-4">
              <label htmlFor="nombre" className="form-label fs-base">
                Nombre
              </label>
              <input
                type="text" id="nombre"
                className="form-control form-control-lg"
                { ...register('nombre')}
              />
              <AlertErrorForm messageError={errors.nombre?.message} />
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="email" className="form-label fs-base">Correo electrónico</label>
              <input type="email"
                id="email"
                className="form-control form-control-lg"
                {...register('email')}
              />
              <AlertErrorForm messageError={errors.email?.message} />
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="phone" className="form-label fs-base">Celular <small className="text-muted">(Opcional)</small></label>
              <input type="text"
                id="phone"
                className="form-control form-control-lg"
                {...register('celular')}
              />
              <AlertErrorForm messageError={errors.celular?.message} />
            </div>
          </div>
          <div className="d-flex mb-3">
            <button type="reset" disabled={isLoading} className="btn btn-secondary me-3">Cancel</button>
            <button type="submit" disabled={isLoading} className="btn btn-primary">Guardar cambios</button>
          </div>
        </form>
        {/* Change clabe interbancaria */}
        {
          user.typeUser !== 'admin' && (<ClabeInterbancaria />)
        }
        {/* Change password account */}
        <div className="form-password mb-4">
          <h2 className="h5 text-primary pt-1 pt-lg-3 mt-4">Seguridad</h2>
          <Link to="cambiar-password" className='text-dark text-left'>Cambiar contraseña</Link>
        </div>
      </div>
    </>
  )
}
