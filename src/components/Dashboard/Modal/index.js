import React from 'react'

export const Modal = (props) => {
  return (
    <div className="modal fade" id={`modal_${props.index}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body text-center">
            <b>¿Seguro que deseas eliminar {props.nombre}?</b>
            <p>Esta acción es irreversible</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-info" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" className="btn btn-danger">Si, eliminar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
