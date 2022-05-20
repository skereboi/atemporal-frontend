/* eslint-disable camelcase */
import React from 'react'
import { categoryService } from '../../../services/category.service'
import { userService } from '../../../services/user.service'

export const Modal = (props) => {
  const {
    index,
    idToDelete,
    setIsDeleted,
    isDeleted,
    type
  } = props
  const handlerRemove = async () => {
    try {
      switch (type) {
        case 'user':
          await userService.deleteOneUser(idToDelete)
          break
        case 'category':
          await categoryService.deleteOneCategory(idToDelete)
          break
      }
      setIsDeleted(() => !isDeleted)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="modal fade" id={`modal_${index}`}
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
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
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={handlerRemove}
            >
              Si, eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
