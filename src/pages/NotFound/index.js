import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <section className="d-flex align-items-center min-vh-100 py-5 bg-light" style={{ background: 'radial-gradient(144.3% 173.7% at 71.41% 94.26%, rgba(99, 102, 241, 0.1) 0%, rgba(218, 70, 239, 0.05) 32.49%, rgba(241, 244, 253, 0.07) 82.52%)' }}>
      <div className="container my-5 text-md-start text-center">
        <div className="row align-items-center">
          {/* Animation */}
          <div className="col-xl-6 col-md-7 order-md-2 ms-n5">
            <lottie-player src="assets/img/animation-404-v1.json" background="transparent" speed={1} loop autoPlay />
          </div>
          {/* Text */}
          <div className="col-md-5 offset-xl-1 order-md-1">
            <h1 className="display-1 mb-sm-4 mt-n4 mt-sm-n5">Error 404</h1>
            <p className="mb-md-5 mb-4 mx-md-0 mx-auto pb-2 lead">La página o recurso que buscas no existe.</p>
            <Link to='/' className="btn btn-lg btn-primary shadow-primary w-sm-auto w-100">
              <i className="bx bx-home-alt= me-2 ms-n1 lead" />
              Ir al home
            </Link>
          </div>
        </div>
      </div>
    </section>

  )
}
