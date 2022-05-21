/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { eventService } from '../../../services/event.service'
import { Faqs } from '../../../components/Events/Faqs'
import { WhyAtemporal } from '../../../components/Events/WhyAtemporal'
import HowItWorks from '../../../components/Events/HowItWorks'

export const EventDetail = () => {
  const categorias = [1, 2, 3, 4]
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
      <div>
        <section className="jarallax dark-mode bg-dark pt-2 pt-lg-3 pb-lg-5" data-jarallax data-speed="0.4">
          <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-70" />
          <img className="jarallax-img" src={event.foto_evento} />
          <div className="container position-relative zindex-5 pb-5">

            {/* Badges */}
            <div className="d-flex pt-3 pb-4 py-sm-4 pt-lg-5">
              {
                categorias.map(c => (<span key={c} className="badge bg-success fs-sm me-2">Categoria {c}</span>))
              }
            </div>
            {/* Title */}
            <h1>{ event.nombre_evento}</h1>
            <p className="fs-lg text-light opacity-70">
              {event.descripcion}
            </p>
            {/* Stats */}
            <div className="d-sm-flex py-3 py-md-4 py-xl-5">
              <div className="d-flex border-sm-end pe-sm-3 me-sm-3 mb-2 mb-sm-0">
                  <i className="bx bx-home text-muted opacity-75" />
                <span className="text-light opacity-70">{event.lugar}</span>
              </div>
              <div className="d-flex border-sm-end pe-sm-3 me-sm-3 mb-2 mb-sm-0">
                <i className="bx bx-time fs-xl text-light opacity-70 me-1" />
                <span className="text-light opacity-70">{event.hora_inicio}</span>
              </div>
              <div className="d-flex">
                <i className="bx bx-time fs-xl text-light opacity-70 me-1" />
                <span className="text-light opacity-70">{event.hora_final}</span>
              </div>
            </div>
            {/* Author */}
            <div className="d-flex align-items-center mt-xl-5 pt-2 pt-md-4 pt-lg-5">
              <i className="bx bx-user fs-xl text-light opacity-70 me-1" />
              <div className="ps-3">
                <div className="text-light opacity-80 mb-1">
                  Organizado por
                </div>
                <h6>{event.nombre_organizador}</h6>
              </div>
            </div>
          </div>
        </section>
        <HowItWorks event={event} />
        <WhyAtemporal/>
        <Faqs/>

      </div>

    </>
  )
}
