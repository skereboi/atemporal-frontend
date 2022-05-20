import React from 'react'
import { Link } from 'react-router-dom'

export const Faqs = () => {
  return (
    <section className="container pb-5 mb-md-3 mb-lg-4 mb-xl-5">
      <div className="row pb-3">
        <div className="col-md-5 mb-4 mb-md-0">
          <div className="card bg-dark h-100 p-lg-5">
            <div className="card-body p-lg-2">
              <h2 className="h1 text-light">Preguntas frecuentes</h2>
              <p className="fs-xl text-light opacity-70 mb-0">
                Para mayor detalle, consulta nuestros términos y condiciones
              </p>
            </div>
            <div className="card-footer border-0 w-100 pt-0 p-4 p-lg-2">
              <Link to='/' className="btn btn-primary btn-lg shadow-primary">
                Ver eventos
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="accordion" id="faq">
            {/* Item */}
            <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
              <h3 className="accordion-header">
                <button className="accordion-button shadow-none rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#q-1" aria-expanded="true" aria-controls="q-1">
                  ¿Mi compra esta protegida?
                </button>
              </h3>
              <div className="accordion-collapse collapse show" id="q-1" data-bs-parent="#faq">
                <div className="accordion-body fs-sm pt-0">
                  <p>
                    Si, comprar con atemporal garantiza que tu dinero este seguro. Despues de acudir al evento tienes 24hrs de garantia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
