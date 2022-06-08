import React from 'react'
import { Link } from 'react-router-dom'
import { TypeUser } from '../../components/Auth/TypeUser'
import { data } from '../../data'

export const Home = () => {
  console.log(process.env.REACT_APP_URL)
  return (
    <>
      <TypeUser/>
      <section className="position-relative pt-3 vh-100">
        {/* Gradient BG */}
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary opacity-10" />
        {/* Content */}
        <div className="container position-relative zindex-2 py-lg-4">
          <div className="row align-items-center">
            <div className="col-lg-5 d-flex flex-column pt-lg-4 pt-xl-5">
              <h5 className="my-2">{ data.homePage.home.title }</h5>
              <h1 className="display-3 mb-4">
                {data.homePage.home.action}
                <span className="text-primary">
                  {data.homePage.home.cta}
                </span>
                {data.homePage.home.message}
              </h1>
            </div>
            <div className="col-lg-7">
              <div id="carouselHome" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselHome" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                  <button type="button" data-bs-target="#carouselHome" data-bs-slide-to={1} aria-label="Slide 2" />
                  <button type="button" data-bs-target="#carouselHome" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>

                <div className="carousel-inner">
                  {
                    data.homePage.home.backgrounds.map(bg => (<InnerItem key={bg.id} {...bg}/>))
                  }
                </div>
                <div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselHome" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselHome" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const InnerItem = ({ pathname, title, id }) => {
  return (
    <div className={`carousel-item  ${id === 1 ? 'active' : ''}`}>
      <img src={pathname} className="d-block w-100" alt={title} />
      <div className="carousel-caption d-none d-md-block">
        <Link to="/eventos" className='btn btn-primary'>Ver eventos</Link>
      </div>
    </div>
  )
}
