import React from 'react'
import { Link } from 'react-router-dom'
import { TypeUser } from '../../components/Auth/TypeUser'
import HowItWorks from '../../components/Home/HowItWorks'
import { data } from '../../data'

export const Home = () => {
  return (
    <>
      <TypeUser/>
      <section className="position-relative pt-3">
        {/* Gradient BG */}
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary opacity-10" />
        {/* Content */}
        <div className="container position-relative zindex-2 py-lg-4">
          <div className="row">
            <div className="col-lg-5 d-flex flex-column pt-lg-4 pt-xl-5">
              <h5 className="my-2">¡Bienvenido!</h5>
              <h1 className="display-3 mb-4">Somos <span className="text-primary">la comunidad</span> más grande de eventos en Querétaro</h1>
              <Link to="/eventos" className='btn btn-primary'>Ver eventos</Link>
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
