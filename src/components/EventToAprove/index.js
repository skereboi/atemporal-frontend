/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'
import { eventService } from '../../services/event.service'

export const EventToAprove = (props) => {
  const {
    fecha_evento,
    descripcion,
    nombre_evento,
    nombre_organizador,
    foto_evento,
    id_evento,
    setAproved,
    aproved
  } = props

  const handlerAproveEvent = async (e) => {
    try {
      await eventService.aproveEvent(id_evento)
      setAproved(() => !aproved)
    } catch (error) {
      alert('error')
      console.log(error)
    }
  }

  return (
    <article className="card border-0 shadow-sm overflow-hidden mb-4">
      <div className="row g-0">
        <img src={foto_evento} className="col-sm-4 position-relative bg-position-center bg-repeat-0 bg-size-cover" />
        <div className="col-sm-8">
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <span className="fs-sm text-muted border-start ps-3 ms-3">
                {fecha_evento}
              </span>
            </div>
            <h3 className="h4">
              <Link to={`/dashboard/eventos/${id_evento}`}> {nombre_evento} </Link>
            </h3>
            <p>{descripcion}</p>
            <hr className="my-4" />
            <div className="d-flex align-items-center justify-content-between">
              <Link to={`/dashboard/eventos/${id_evento}`} className="d-flex align-items-center fw-bold text-dark text-decoration-none me-3">
                <img src={foto_evento} className="rounded-circle me-3" width={48} alt="Foto de evento" />
                {nombre_organizador}
              </Link>
            </div>
          </div>
          <div className="d-flex align-items-center text-muted">
            <button onClick={handlerAproveEvent} className="btn btn-primary">
              <i className="bx bx-like fs-lg me-1" />
              <span className="fs-sm">Aprobar</span>
            </button>
            <button className="btn btn-danger">
              <i className="bx bx-like fs-lg me-1" />
              <span className="fs-sm">Rechazar</span>
            </button>
          </div>

        </div>
      </div>
    </article>
  )
}
