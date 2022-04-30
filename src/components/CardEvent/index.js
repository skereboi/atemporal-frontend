import React from 'react'
import { Link } from 'react-router-dom'

export const CardEvent = (props) => {
  return (
    <div className="col pb-3">
      <article className="card border-0 shadow-sm h-100">
        <div className="position-relative">
          <a href="blog-single.html" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more" />
          <a href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later">
            <i className="bx bx-bookmark" />
          </a>
          <img src="assets/img/blog/01.jpg" className="card-img-top" alt="Image" />
        </div>
        <div className="card-body pb-4">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <a href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">{props.ubicacion}</a>
            <span className="fs-sm text-muted">{props.fecha_evento}</span>
          </div>
          <h3 className="h5 mb-0">
            <Link to={`/eventos/${props.id_evento}`}>{props.nombre_evento }</Link>
          </h3>
        </div>
        <div className="card-footer py-4">
          <a href="#" className="d-flex align-items-center fw-bold text-dark text-decoration-none">
            <img src="assets/img/avatar/01.jpg" className="rounded-circle me-3" width={48} alt="Avatar" />
            {props.nombre_organizador}
          </a>
        </div>
      </article>
    </div>
  )
}
