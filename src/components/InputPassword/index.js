import React, { useState } from 'react'
import { AlertErrorForm } from '../AlertErrorForm'
import './style.scss'

export const InputPassword = ({
  register,
  errors,
  type = 'password',
  title = 'Contraseña'
}) => {
  const [show, setShow] = useState(true)
  return (
    <>
      <div className="col-12 mb-4">
        <div className="password-toggle">
          <label htmlFor="password" className="form-label fs-base">{title}</label>
          <input
            className="form-control form-control-lg"
            type={show ? 'password' : 'text'}
            {...register(type)}
            autoComplete="off"
            placeholder='Ingresa tu contraseña'
          />
          <label className="password-toggle-btn" onClick={() => setShow(!show)}>
            {show
              ? (<i className="bx bx-show text-primary bx-sm" />)
              : (<i className="bx bxs-low-vision text-primary bx-sm"/>)
            }
          </label>
        </div>
        <AlertErrorForm messageError={errors[type]?.message} />
      </div>
      {/* Password visibility toggle */}

    </>
  )
}
