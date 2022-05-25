/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'
import { eventService } from '../../../services/event.service'
import './style.scss'
// import * as bootstrap from 'bootstrap'

export const CardEventDashboard = (props) => {
  const {
    fecha_evento,
    descripcion,
    lugar,
    nombre_evento,
    nombre_organizador,
    foto_evento,
    id_evento,
    setFetched,
    fetch,
    fromPublicados,
    fromEliminados,
    fromAprobados
  } = props

  // useEffect(() => {
  //   const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
  //   const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
  //   console.log(popoverList)
  //   return () => {
  //     console.log(popoverList)
  //   }
  // }, [])

  const handlerAproveEvent = async (e) => {
    try {
      console.log(fromPublicados)
      await eventService.aproveEvent(id_evento)
      setFetched(() => !fetch)
    } catch (error) {
      alert('error')
      console.log(error)
    }
  }
  const handlerRejectEvent = async () => {
    try {
      await eventService.rejectEvent(id_evento)
      setFetched(() => !fetch)
    } catch (error) {
      alert('error')
      console.log(error)
    }
  }
  const handlerRemoveEvent = async () => {
    try {
      await eventService.removeEvent(id_evento)
      setFetched(() => !fetch)
    } catch (error) {
      alert('error')
      console.log(error)
    }
  }

  return (
    <article className="card border-0 mb-4">
      <div className="row">
        <img src={foto_evento}
          className="col-sm-5 position-relative bg-position-center bg-repeat-0 bg-size-cover"
        />
        <div className="col-sm-7">
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <span className="fs-sm text-muted border-start ps-3 ms-3">
                Fecha del evento: {fecha_evento}
              </span>
            </div>
            <h3 className="h4">
              <Link to={`/dashboard/aprobar/eventos/${id_evento}`}>
                {nombre_evento}
              </Link>
            </h3>
            <p>
              <b>
                Lugar:
              </b>
              {' ' + lugar}
            </p>
            <p>
              <b>
                Descripcion:
              </b>
              {' ' + descripcion}
            </p>
            <hr className="my-4" />
            <p>
              <b>
                Organizador:
              </b>
              {' ' + nombre_organizador}
            </p>
          </div>
          <div className="card-actions">
            <Link
              to={`/dashboard/aprobar/eventos/${id_evento}`}
              className="btn btn-info btn-sm"
            >
              <i className="bx bx-info-square fs-lg" />
            </Link>

            <button onClick={handlerAproveEvent} disabled={fromPublicados} className="btn btn-success btn-sm">
              <i className="bx bx-like fs-lg" />
            </button>

            <button onClick={handlerRejectEvent} disabled={fromAprobados} className="btn btn-warning btn-sm">
              <i className="bx bx-dislike fs-lg" />
            </button>

            <button onClick={handlerRemoveEvent} disabled={fromEliminados} className="btn btn-danger btn-sm">
              <i className="bx bx-trash fs-lg" />
            </button>
          </div>

        </div>
      </div>
    </article>
  )
}
