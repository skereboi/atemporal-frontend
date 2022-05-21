import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { ShareButton } from '../../../components/ShareButton/Index'
import { eventService } from '../../../services/event.service'

export const EventDetail = () => {
  const { idEvento } = useParams()
  const [event, setEvent] = useState({})
  useEffect(() => {
    const getEvents = async () => {
      try {
        const dbEvent = await eventService.getOneEvent(idEvento)
        setEvent(dbEvent)
      } catch (error) {
        console.log(error.response.status)
        setEvent(null)
      }
    }

    getEvents()
  }, [])

  if (event === null) {
    return <Navigate to="/recurso-no-encontrado" />
  }
  return (
    <>

        {/* Post title + Meta  */}
        <section className="container mt-4 pt-lg-2 pb-3">
        <h1 className="pb-3" style={{ maxWidth: 970 }}>
          {event.nombre_evento}
        </h1>
          <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-md-between mb-3">
            <div className="d-flex align-items-center flex-wrap text-muted mb-md-0 mb-4">
              <div className="fs-xs border-end pe-3 me-3 mb-2">
              {
                event.categories?.map((category, index) => (
                  <span key={index} className="badge bg-faded-primary text-primary fs-base">
                  {category}
                </span>))
                }
              </div>
            <div className="fs-sm border-end pe-3 me-3 mb-2">{event.fecha_evento}</div>
              <div className="d-flex mb-2">
                <div className="d-flex align-items-center me-3">
                  <i className="bx bx-like fs-base me-1" />
                  Hora de inicio: <span className="fs-sm">{event.hora_inicio}</span>
                </div>
                <div className="d-flex align-items-center me-3">
                  <i className="bx bx-like fs-base me-1" />
                  Hora de fin: <span className="fs-sm">{event.hora_final}</span>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center position-relative ps-md-3 pe-lg-5 mb-2">
            {/* <img src={} className="rounded-circle" width={60} alt="Avatar" /> */}
              <div className="ps-3">
                <h6 className="mb-1">Organizador</h6>
              <p className="fw-semibold stretched-link">{event.nombre_organizador}</p>
              </div>
            </div>
          </div>
        </section>
        {/* Post image (parallax) */}
        <div className="jarallax mb-lg-5 mb-4" data-jarallax data-speed="0.4" style={{ height: '36.45vw', minHeight: 300 }}>
        <img className="jarallax-img" src={event.foto_evento} />
        </div>
        {/* Post content + Sharing */}
        <section className="container mb-5 pt-4 pb-2 py-mg-4">
          <div className="row gy-4">
            {/* Content */}
            <div className="col-lg-9">
            <h2 className="h2">Detalle de evento</h2>
            <h3 className="h5 mb-4 pb-2 fw-medium">Ubicación</h3>
            <p className="mb-4 pb-2">{event.direccion}</p>
            <h3 className="h5 mb-4 pb-2 fw-medium">Descripción</h3>
            <p className="mb-4 pb-2">
              {event.descripcion}
            </p>
            <h3 className="h5 mb-4 pb-2 fw-medium">Video</h3>
              {/* Video */}
              <div className="gallery mb-4 pb-2" data-video="true">
              <a href={event.url_video} className="gallery-item video-item is-hovered rounded-3" data-sub-html="<h6 class=&quot;fs-sm text-light&quot;>Video inside blog post</h6>">
                <img src={event.foto_evento} alt="Video preview" />
                </a>
              </div>

              {/* Tags */}
              <hr className="mb-4" />
              <div className="d-flex flex-sm-row flex-column pt-2">
                <h6 className="mt-sm-1 mb-sm-2 mb-3 me-2 text-nowrap">Categorias relacionadas</h6>
                <div>
                  <p className="btn btn-sm btn-outline-secondary me-2 mb-2">arte</p>
                  <p className="btn btn-sm btn-outline-secondary me-2 mb-2">cultura</p>
                </div>
              </div>
            </div>
            {/* Sharing */}
            <div className="col-lg-3 position-relative">
              <div className="sticky-top ms-xl-5 ms-lg-4 ps-xxl-4" style={{ top: '105px !important' }}>
                <span className="d-block mb-3">Invita a tus amigos</span>
                <h6>Comparte este evento</h6>
                {/* <div className="mb-4 pb-lg-3">
                  <a href="#" className="btn btn-icon btn-secondary btn-linkedin me-2 mb-2">
                    <i className="bx bxl-facebook" />
                  </a>
                </div> */}
               <ShareButton/>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
