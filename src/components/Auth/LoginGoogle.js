import React from 'react'

export const LoginGoogle = () => {
  return (
    <>
      <h6 className="text-center mb-4">Iniciar sesión con red social</h6>
      <div className="row row-cols-1">
        <div className="col mb-3">
          <a href="#" className="btn btn-icon btn-secondary btn-google btn-lg w-100">
            <i className="bx bxl-google fs-xl me-2" />
            Google
          </a>
        </div>
      </div>
    </>
  )
}
