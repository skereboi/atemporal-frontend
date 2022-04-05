import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {
  return (
    <>
      {/* Page content */}
      <div className="container d-flex flex-wrap justify-content-center justify-content-xl-start pt-5">
        <div className="w-100 align-self-end pt-1 pt-md-4 pb-4" style={{ maxWidth: 526 }}>
          <h1 className="text-center text-xl-start">Crear cuenta</h1>
          <p className="text-center text-xl-start pb-3 mb-3">¿Ya tienes una cuenta?<Link to="/iniciar-sesion">Inicia sesión aqui.</Link></p>
          <form className="needs-validation" noValidate>
            <div className="row">
              <div className="col-sm-6">
                <div className="position-relative mb-4">
                  <label htmlFor="name" className="form-label fs-base">Nombre completo</label>
                  <input type="text" id="name" className="form-control form-control-lg" required />
                  <div className="invalid-feedback position-absolute start-0 top-100">Por favor ingresa tu nombre</div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="position-relative mb-4">
                  <label htmlFor="email" className="form-label fs-base">Correo electrónico</label>
                  <input type="email" id="email" className="form-control form-control-lg" required />
                  <div className="invalid-feedback position-absolute start-0 top-100">Ingresa un correo válido</div>
                </div>
              </div>
              <div className="col-12 mb-4">
                <label htmlFor="password" className="form-label fs-base">Contraseña</label>
                <div className="password-toggle">
                  <input type="password" id="password" className="form-control form-control-lg" required />
                  <label className="password-toggle-btn" aria-label="Show/hide password">
                    <input className="password-toggle-check" type="checkbox" />
                    <span className="password-toggle-indicator" />
                  </label>
                  <div className="invalid-feedback position-absolute start-0 top-100">Ingresa una contraseña que sea alfanumerica y contenga al menos una caracter especial</div>
                </div>
              </div>
              <div className="col-12 mb-4">
                <label htmlFor="password-confirm" className="form-label fs-base">Confirma tu contraseña</label>
                <div className="password-toggle">
                  <input type="password" id="password-confirm" className="form-control form-control-lg" required />
                  <label className="password-toggle-btn" aria-label="Show/hide password">
                    <input className="password-toggle-check" type="checkbox" />
                    <span className="password-toggle-indicator" />
                  </label>
                  <div className="invalid-feedback position-absolute start-0 top-100">Confirma tu contraseña</div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="form-check">
                <input type="checkbox" id="terms" className="form-check-input" />
                <label htmlFor="terms" className="form-check-label fs-base">I Acepto <a href="#">Terminos y &amp; condiciones</a></label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary shadow-primary btn-lg w-100">Registrarme</button>
          </form>
          <hr className="my-4" />
          <h6 className="text-center mb-4">Crear cuenta con red social</h6>
          <div className="row row-cols-1 row-cols-sm-2">
            <div className="col mb-3">
              <a href="#" className="btn btn-icon btn-secondary btn-google btn-lg w-100">
                <i className="bx bxl-google fs-xl me-2" />
                Google
              </a>
            </div>
            <div className="col mb-3">
              <a href="#" className="btn btn-icon btn-secondary btn-facebook btn-lg w-100">
                <i className="bx bxl-facebook fs-xl me-2" />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
