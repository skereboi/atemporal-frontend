import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { InputPassword } from '../../../components/InputPassword'
import { useAuth } from '../../../hooks/useAuth'
import { useGeneralApp } from '../../../hooks/useGeneralApp'
import { authService } from '../../../services/auth.service'
import { schemaChangePassword } from '../../ChangePassword/schemaChangePassword'
export const AccountPassword = () => {
  const { user, logout } = useAuth()
  const { setErrorMessage, isLoading, setIsLoading } = useGeneralApp()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaChangePassword)
  })
  const onSubmit = async (data) => {
    setIsLoading(true)
    const { password } = data
    try {
      const { msg } = await authService.updatePassword(password, user.id_usuario)
      alert(msg)
      setIsLoading(false)
      logout()
    } catch (error) {
      console.log(error.response.data.msg)
      setErrorMessage(`⚠️${error.response.data.msg}⚠️`)
      setIsLoading(false)
    }
  }
  return (
    <>
      {/* Account details */}
      <div className="ps-md-3 ps-lg-0 mt-md-2 py-md-4">

        <h1 className="h2 pt-xl-1 pb-3">Cambiar contraseña</h1>
        {/* Basic info */}
        <h2 className="h5 text-primary mb-4">Ingresa una nueva contraseña</h2>
        <form className="needs-validation border-bottom pb-3 pb-lg-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="row pb-2">
            <InputPassword register={register} errors={errors} />
            <InputPassword
              register={register}
              errors={errors}
              type="confirmPassword"
              title='Confirma tu contraseña'
            />
          </div>
          <div className="d-flex mb-3">
            <Link to="/mi-cuenta" className="btn btn-secondary me-3" disabled={isLoading}>Cancelar</Link>
            <button type="submit" className="btn btn-primary" disabled={isLoading}>Guardar cambios</button>
          </div>
        </form>
      </div>
      {/* Delete account */}
      {
        user?.typeUser === 'general' && (
          <>
            <h2 className="h5 text-primary pt-4 pt-lg-3 mt-4">Eliminar cuenta</h2>
            <p>Al eliminar tu cuenta, este proceso es irreversible.</p>
            <div className="form-check mb-4">
              <input type="checkbox" id="delete-account" className="form-check-input" />
              <label htmlFor="delete-account" className="form-check-label fs-base">Si, quiero eliminar mi cuenta.</label>
            </div>
            <button type="button" className="btn btn-danger">Eliminar</button>
          </>
        )
      }

    </>
  )
}
