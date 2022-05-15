/* eslint-disable no-unused-vars */
import React from 'react'
import { useStateMachine } from 'little-state-machine'
import { clearAction } from './actions'
import { initialStates } from '../../../hooks/useLittleMachine'
import Select from 'react-select'
import { useForm } from 'react-hook-form'
import { AlertErrorForm } from '../../../components/AlertErrorForm'
export const InformationSummary = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm()
  const { actions, state: { createEvent } } = useStateMachine({ clearAction })
  return (
    <div className="summary-container">
      <h1 className="h2 pt-xl-1 pb-3">Resumen</h1>
      <div className='section-summary'>
        {/* Basic info */}
        <h3 className="h5 text-primary mb-4">Datos del organizador</h3>
        <div className="border-bottom pb-3 pb-lg-4">
          <div className="row pb-2">
            <div className="col-sm-12 mb-4">
              <label htmlFor="fn" className="form-label fs-base">Nombre del organizador</label>
              <input type="text"
                id="fn" className="form-control form-control-lg"
                value={createEvent.nombre_organizador}
                disabled
              />
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="sn" className="form-label fs-base">Celular principal</label>
              <input type="text" id="sn"
                className="form-control form-control-lg"
                value={createEvent.celular_principal}
                disabled
              />
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="sn" className="form-label fs-base">Celular secundario</label>
              <input type="text" id="sn"
                className="form-control form-control-lg"
                value={createEvent.celular_secundario}
                disabled
              />
            </div>
          </div>
        </div>
      </div>
      {/* Event data */}
      <div className='section-summary'>
        {/* Basic info */}
        <h2 className="h5 text-primary mb-4">Datos del evento</h2>
        <div
          className="needs-validation border-bottom pb-3 pb-lg-4"
        >
          <div className="row pb-2">
            <div className="col-sm-12 mb-4">
              <label htmlFor="nombre_evento" className="form-label fs-base">Nombre del evento</label>
              <input type="text"
                id="nombre_evento" className="form-control form-control-lg"
                value={createEvent.nombre_evento}
                disabled
              />
            </div>
            <div className="col-sm-12 mb-4">
              <label htmlFor="descripcion" className="form-label fs-base">Descripcion del evento</label>
              <textarea type="text"
                id="descripcion"
                className="form-control form-control-lg"
                value={createEvent.descripcion}
              />
            </div>
            <div className="col-sm-4 mb-4">
              <label htmlFor="fecha_evento" className="form-label fs-base">Fecha de evento</label>
              <input type="date" id="fecha_evento"
                className="form-control form-control-lg"
                value={createEvent.fecha_evento}
                disabled
              />
            </div>
            <div className="col-sm-4 mb-4">
              <label htmlFor="hora_inicio" className="form-label fs-base">Hora inicio</label>
              <input type="time"
                id="hora_inicial"
                className="form-control form-control-lg"
                value={createEvent.hora_inicio}
              />
            </div>
            <div className="col-sm-4 mb-4">
              <label htmlFor="hora_final" className="form-label fs-base">Hora final</label>
              <input type="time"
                id="hora_inicial"
                className="form-control form-control-lg"
                value={createEvent.hora_final}
                disabled
              />
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="lugar" className="form-label fs-base">Nombre del lugar</label>
              <input type="text" id="lugar"
                className="form-control form-control-lg"
                value={createEvent.lugar}
                disabled
              />
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="ubicacion_maps" className="form-label fs-base">Selecciona la ubicación en maps</label>
              <input type="text" id="ubicacion_maps"
                className="form-control form-control-lg"
                value={createEvent.ubicacion_maps}
                disabled
              />
            </div>
            <div className="col-sm-12 mb-4">
              <label htmlFor="direccion" className="form-label fs-base">Dirección del evento</label>
              <textarea type="text"
                id="direccion" className="form-control form-control-lg"
                value={createEvent.direccion}
                disabled
              />
            </div>
            <div className="col-sm-12 col-md-4 mb-4">
              <label htmlFor="url_video" className="form-label fs-base">Url de video youtube (Opcional)</label>
              <input type="text" id="url_video"
                className="form-control form-control-lg"
                value={createEvent.url_video}
              />
            </div>
            <div className="col-sm-12 col-md-4 mb-4">
              <label htmlFor="itinerario_evento" className="form-label fs-base">Foto de evento</label>
              <input type="text" id="itinerario_evento"
                className="form-control form-control-lg"
                value={createEvent.foto_evento}
              />
              {/* {errors.foto_evento && (<AlertErrorForm messageError={errors.foto_evento.message} />)} */}
            </div>
            <div className="col-sm-12 col-md-4 mb-4">
              <label htmlFor="itinerario_evento" className="form-label fs-base">Itinerario de evento (.pdf)</label>
              <input type="text" id="itinerario_evento"
                className="form-control form-control-lg"
                value={createEvent.itinerario_evento}
              />
              {/* {errors.itinerario_evento && (<AlertErrorForm messageError={errors.itinerario_evento.message} />)} */}
            </div>
            <div className="col-sm-12 mb-4">
              <label htmlFor="categorias" className="form-label fs-base">Selecciona las categorias a las que pertenece tu evento</label>
              <Select
                placeholder="Selecciona tu categoria"
                isMulti
                defaultValue={createEvent.categories}
                isDisabled
              />
              {errors.categorias && (<AlertErrorForm messageError={errors.categorias.message} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
