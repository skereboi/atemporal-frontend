import React from 'react'

const HowItWorks = ({ event }) => {
  return (
    <section className="container pt-5 mt-2 mt-lg-4 mt-xl-5">
      <div className="row">
        {/* Sidebar (Course summary) */}
        <aside className="col-lg-4 col-md-5 offset-xl-1 order-md-2 mb-5">
          <div style={{ marginTop: '-96px' }} />
          <div className="position-sticky top-0 pt-5">
            <div className="pt-5 mt-md-3">
              <div className="card shadow-sm p-sm-3">
                <div className="card-body">
                  <h4 className="mb-4">Disponibilidad</h4>
                  <ul className="list-unstyled pb-3">
                    <li className="d-flex align-items-center mb-2">
                      <i className="bx bx-infinite fs-xl text-muted me-2 pe-1" />
                      {
                        event.tipo_cobro === 1 && ('Evento de paga')
                      }
                    </li>
                  </ul>
                  <p className='text-muted'>Desde</p>
                  <div className="h2 d-flex align-items-center mb-4">$79<del className="text-muted fs-xl fw-normal ms-2">99</del></div>
                  <a href="#" className="btn btn-primary btn-lg shadow-primary">Comprar boletos</a>
                </div>
              </div>
            </div>
          </div>
        </aside>
        {/* Content */}
        <div className="col-xl-7 col-lg-8 col-md-7 order-md-1 mb-5">
          <h2 className="h1 pb-md-2 pb-lg-3">Descripción de evento</h2>
          <p className="pb-4 mb-3">
            {
              event.descripcion
            }
          </p>
          <h3 className="mb-4">Lugar</h3>
          <ul className="list-unstyled mb-5">
            <li className="d-flex align-items-center mb-2">
              <i className="bx bx-check-circle text-primary fs-xl me-2" />
              {event.lugar}
            </li>
            <li className="d-flex align-items-center mb-2">
              <i className="bx bx-check-circle text-primary fs-xl me-2" />
              {event.direccion}
            </li>
            <li className="d-flex align-items-center mb-2">
              <i className="bx bx-check-circle text-primary fs-xl me-2" />
              {event.ubicacion_maps}
            </li>
          </ul>
          <h2 className="h1 pt-md-2 pt-lg-4 pt-xl-5 pb-md-3 pb-lg-4 mb-md-4">Proceso de reserva</h2>
          <div className="steps steps-sm">
            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">1</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Inicia sesión</h4>
                <p className="mb-0">
                  Revisa disponibilidad
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">2</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Elige el tipo de boleto</h4>
                <p className="mb-0">
                  Selecciona el tipo de boleto que deseas adquirir
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">3</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Selecciona tu método de pago</h4>
                <p className="mb-0">
                  Aceptamos visa / mastercard. Utilizamos Sr Pago, como pasarela de pago.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">4</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Paga</h4>
                <p className="mb-0">
                  Comprar tu boleto, la plataforma te dara las siguientes instrucciones.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">
                <div className="step-number-inner">5</div>
              </div>
              <div className="step-body">
                <h4 className="mb-2">Confirmación de reserva</h4>
                <p className="mb-0">
                  Te llegara un correo con todos los detalles, incluyendo tu boleto digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
