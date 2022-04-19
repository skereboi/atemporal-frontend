import React from 'react'
import HowItWorks from '../../components/Home/HowItWorks'
import { data } from '../../data'

export const Home = () => {
  return (
    <>
      <section className="position-relative py-5">
        {/* Gradient BG */}
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary opacity-10" />
        {/* Content */}
        <div className="container position-relative zindex-2 py-lg-4">
          <div className="row">
            <div className="col-lg-5 d-flex flex-column pt-lg-4 pt-xl-5">
              <h5 className="my-2">¡Bienvenido!</h5>
              <h1 className="display-3 mb-4">Somos <span className="text-primary">la comunidad</span> más grande de eventos en Querétaro</h1>
              <p className="fs-lg mb-5">Encuentra el evento de tu preferencia</p>
              {/* Desktop form */}
              <form className="d-none d-sm-flex mb-5">
                <div className="input-group d-block d-sm-flex input-group-lg me-3">
                  <input type="text" className="form-control w-50" placeholder="Buscar eventos..." />
                  <select className="form-select w-50">
                    <option value selected disabled>Categorias</option>
                    <option value="Culturales">Culturales</option>
                    <option value="Danza">Danza</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-icon btn-primary btn-lg">
                  <i className="bx bx-search" />
                </button>
              </form>
              {/* Mobile form */}
              <form className="d-sm-none mb-5">
                <input type="text" className="form-control form-control-lg mb-2" placeholder="Buscar eventos..." />
                <select className="form-select w-50">
                  <option value selected disabled>Categorias</option>
                  <option value="Culturales">Culturales</option>
                  <option value="Danza">Danza</option>
                </select>
                <button type="submit" className="btn btn-icon btn-primary btn-lg w-100 d-sm-none">
                  <i className="bx bx-search" />
                </button>
              </form>

            </div>
            <div className="col-lg-7">
              {/* Parallax gfx */}
              <div className="parallax mx-auto me-lg-0" style={{ maxWidth: 648 }}>
                {/* IMGS */}
                {
                  data.homePage.home.backgrounds.map(bg => (<ParallaxImg key={bg.id} {...bg}/>))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <HowItWorks/>
    </>
  )
}
const ParallaxImg = ({ path, title }) => {
  return (
    <div className="parallax-layer" data-depth="0.1">
      <img src={path} alt={title} />
    </div>
  )
}
