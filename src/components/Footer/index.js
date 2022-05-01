import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="footer pt-5 pb-4 pb-lg-5">
      <div className="container pt-lg-4">
        <div className="row pb-5">
          <div className="col-lg-4 col-md-6">
            <div className="navbar-brand text-dark p-0 me-0 mb-3 mb-lg-4">
              <img src="assets/img/footer/logo.png" width={47} alt="Atemporal" />
              Atemporal
            </div>
            <p className="fs-sm pb-lg-3 mb-4">Somos una plataforma de eventos enfocada en Querétaro.</p>
          </div>
          <div className="col-xl-6 col-lg-7 col-md-5 offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0">
            <div id="footer-links" className="row">
              <div className="col-lg-4">
                <h6 className="mb-2">
                  <a href="#useful-links" className="d-block text-dark dropdown-toggle d-lg-none py-2" data-bs-toggle="collapse">Useful Links</a>
                </h6>
                <div id="useful-links" className="collapse d-lg-block" data-bs-parent="#footer-links">
                  <ul className="nav flex-column mb-2 mb-lg-0">
                    <li className="nav-item"><Link to="/terminos-condiciones" className="nav-link d-inline-block px-0 pt-1 pb-2">Términos &amp; Condiciones</Link></li>
                    <li className="nav-item"><Link to="aviso-privacidad" className="nav-link d-inline-block px-0 pt-1 pb-2">Aviso de privacidad</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-3">
                <h6 className="mb-2">
                  <a href="#social-links" className="d-block text-dark dropdown-toggle d-lg-none py-2" data-bs-toggle="collapse">Redes sociales</a>
                </h6>
                <div id="social-links" className="collapse d-lg-block" data-bs-parent="#footer-links">
                  <ul className="nav flex-column mb-2 mb-lg-0">
                    <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Facebook</a></li>
                    <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">LinkedIn</a></li>
                    <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Twitter</a></li>
                    <li className="nav-item"><a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Instagram</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 pt-2 pt-lg-0">
                <h6 className="mb-2">Contacto</h6>
                <a href="mailto:atemporal.ac@gmail.com" className="fw-medium">atemporal.ac@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <p className="fs-xs text-center text-md-start pb-2 pb-lg-0 mb-0">
          © Todos los derechos reservados por <span className="nav-link d-inline-block p-0">One Unit</span>
        </p>
      </div>
    </footer>
  )
}
