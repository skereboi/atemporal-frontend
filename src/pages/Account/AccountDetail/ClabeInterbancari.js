import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AlertErrorForm } from '../../../components/AlertErrorForm'
import { useAuth } from '../../../hooks/useAuth'
import { useGeneralApp } from '../../../hooks/useGeneralApp'
import { whoIamService } from '../../../services/auth.service'
import { userService } from '../../../services/user.service'

export const ClabeInterbancaria = () => {
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
    resolver: yupResolver(),
    defaultValues: user
  })
  const onSubmitClabe = async (data) => {
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
    <div className="form-password mb-4">
      <h2 className="h5 text-primary pt-1 pt-lg-3 mt-4">Datos de organizador eventos</h2>
      <form className="border-bottom pb-3 pb-lg-4" onSubmit={handleSubmit(onSubmitClabe)}>
        <div className="row pb-2">
          <div className="col-sm-12 mb-4">
            <label
              htmlFor="clabe_interbancaria"
              className="form-label fs-base"
            >
              Clabe interbancaria
            </label>
            <input
              type="text" id="clabe_interbancaria"
              className="form-control form-control-lg"
              placeholder='Ingresa tu clabe interbancaria a 18 digitos'
              {...register('clabe_interbancaria')}
            />
            <span className='text-muted pt-2'>Uso obligatorio si organizas eventos</span>
            <AlertErrorForm messageError={errors.clabe_interbancaria?.message} />
          </div>
        </div>
        <div className="d-flex mb-3">
          <button type="reset" disabled={isLoading} className="btn btn-secondary me-3">Cancel</button>
          <button type="submit" disabled={isLoading} className="btn btn-primary">Guardar cambios</button>
        </div>
      </form>
    </div>
  )
}
