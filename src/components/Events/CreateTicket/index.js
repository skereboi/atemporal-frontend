import React from 'react'

export const CreateTicket = ({ index, remove, register }) => {
  return (
    <div className='form-control my-2'>
      <div className="mb-4">
        <label htmlFor="text-input" className="form-label">
          Nombre del boleto
        </label>
        <input
          {...register(`boletos.${index}.nombre`)}
          placeholder='Ejemplo general'
          className="form-control"
          type="text" id="text-input"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="number-input" className="form-label">
          Cantidad de boletos disponibles
        </label>
        <input
          {...register(`boletos.${index}.cantidad`)}
          className="form-control"
          type="number"
          id="cantidad"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="number-input" className="form-label">
          Precio del boleto (MXN - Peso mexicano)
        </label>
        <input
          {...register(`boletos.${index}.precio`)}
          className="form-control"
          type="number"
          id="precio"
        />
      </div>

      <button
        type="button"
        className='btn btn-danger btn-sm'
        onClick={() => remove(index)}
      >
        Eliminar boleto
      </button>
    </div>
  )
}
