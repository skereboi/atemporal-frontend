import React from 'react'
import logo from '../../../assets/footer/logo.png'

export const WhyAtemporal = () => {
  return (
    <section className="container py-lg-4 py-xl-5 mt-3 mb-5">
      <div className="row g-0 bg-dark bg-repeat-0 bg-position-center border rounded-3 overflow-hidden"
        style={{ backgroundImage: 'url(assets/img/portfolio/courses/author-pattern.svg)' }}
      >
        <img
          src={logo}
          className="col-md-5 bg-repeat-0 bg-position-top-center bg-size-cover" style={{ minHeight: 350 }} />
        <div className="col-md-7 py-xl-5 px-4">
          <div className="py-5 mx-auto"
            style={{ maxWidth: 530 }}
          >
            <div className="fs-xl text-light opacity-50 mb-2">
              Reservas con Atemporal
            </div>
            <h2 className="h1 text-light mb-4">
              Garantia
            </h2>
            <p className="text-light opacity-70 pb-4">
              Al reservar con atemporal, protegemos tu compra y procuramos que tu experiencia sea increible
            </p>
            <div className="d-flex flex-column flex-sm-row">
              <a href="#" className="btn btn-danger me-sm-4 mb-3 mb-sm-0">
                <i className="bx bxl-youtube fs-xl me-2" />
                240k suscriptores
              </a>
              <a href="#" className="btn btn-info">
                <i className="bx bxl-facebook-square fs-xl me-2" />
                180k seguidores
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
