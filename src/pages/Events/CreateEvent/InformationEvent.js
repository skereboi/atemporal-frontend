/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import { useStateMachine } from 'little-state-machine'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { updateCreateEvent } from './actions'
import { useNavigate } from 'react-router-dom'
import { SchemaEvent } from './schemas'
import { AlertErrorForm } from '../../../components/AlertErrorForm'
import { FormButtons } from '../../../components/Events/FormButtons'
import { categoryService } from '../../../services/category.service'
import Select from 'react-select'
import moment from 'moment'

export const InformationEvent = () => {
  const [categories, setCategories] = useState([])
  const { actions, state: { createEvent } } = useStateMachine({ updateCreateEvent })
  const [previewSource, setPreviewSource] = useState('')

  const { register, handleSubmit, control, formState: { errors }, watch } = useForm({
    resolver: yupResolver(SchemaEvent),
    defaultValues: createEvent
  })

  useEffect(() => {
    const getPaymentMethods = async () => {
      const categories = await categoryService.getAllCategories()
      setCategories(categories.map(c => ({
        label: c.nombre,
        value: c.id_categoria
      })))
    }
    getPaymentMethods()
  }, [])

  const navigate = useNavigate()

  const convertToBase64 = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    // reader.onloadend = () => {
    //   setPreviewSource(reader.result.toString())
    // }
    // reader.readAsDataURL(file)
    return reader.result.toString()
  }

  const onSubmit = (data) => {
    const { fecha_evento } = data
    console.log(data.foto_evento[0])
    const formatInfo = {
      ...data,
      foto_evento: data.foto_evento[0].name,
      fecha_evento: moment(fecha_evento).format()
    }

    actions.updateCreateEvent({ payload: formatInfo })
    navigate('/crear-evento/informacion-boletos')
  }

  return (
    <>
      <h1 className="h2 pt-xl-1 pb-3">Información del evento</h1>
      {/* Basic info */}
      <h2 className="h5 text-primary mb-4">Datos del evento</h2>
      <form className="needs-validation border-bottom pb-3 pb-lg-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="row pb-2">
          <div className="col-sm-12 mb-4">
            <label htmlFor="nombre_evento" className="form-label fs-base">Nombre del evento</label>
            <input type="text"
              id="nombre_evento" className="form-control form-control-lg"
              {...register('nombre_evento')}
            />
            {errors.nombre_evento && (<AlertErrorForm messageError={errors.nombre_evento.message} />)}
          </div>
          <div className="col-sm-12 mb-4">
            <label htmlFor="descripcion" className="form-label fs-base">Descripcion del evento</label>
            <textarea type="text"
              id="descripcion" className="form-control form-control-lg"
              {...register('descripcion')}
            />
            {errors.descripcion && (<AlertErrorForm messageError={errors.descripcion.message} />)}
          </div>
          <div className="col-sm-4 mb-4">
            <label htmlFor="fecha_evento"
              className="form-label fs-base">
              Fecha de evento
            </label>
            <input
              type="date"
              id="fecha_evento"
              className="form-control form-control-lg"
              {...register('fecha_evento')}
            />
            {errors.fecha_evento && (<AlertErrorForm messageError={errors.fecha_evento.message} />)}
          </div>
          <div className="col-sm-4 mb-4">
            <label htmlFor="hora_inicio" className="form-label fs-base">Hora inicio</label>
            <input type="time"
              id="hora_inicial"
              className="form-control form-control-lg"
              {...register('hora_inicio')}
            />
            {errors.hora_inicio && (<AlertErrorForm messageError={errors.hora_inicio.message} />)}
          </div>
          <div className="col-sm-4 mb-4">
            <label htmlFor="hora_final" className="form-label fs-base">Hora final</label>
            <input type="time"
              id="hora_inicial"
              className="form-control form-control-lg"
              {...register('hora_final')}
            />
            {errors.hora_final && (<AlertErrorForm messageError={errors.hora_final.message} />)}
          </div>
          <div className="col-sm-6 mb-4">
            <label htmlFor="lugar" className="form-label fs-base">Nombre del lugar</label>
            <input type="text" id="lugar"
              className="form-control form-control-lg"
              {...register('lugar')}
            />
            {errors.lugar && (<AlertErrorForm messageError={errors.lugar.message} />)}
          </div>
          <div className="col-sm-6 mb-4">
            <label htmlFor="ubicacion_maps" className="form-label fs-base">Selecciona la ubicación en maps</label>
            <input type="text" id="ubicacion_maps"
              className="form-control form-control-lg"
              {...register('ubicacion_maps')}
            />
            {errors.ubicacion_maps && (<AlertErrorForm messageError={errors.ubicacion_maps.message} />)}
          </div>
          <div className="col-sm-12 col-md-6 mb-4">
            <label htmlFor="direccion" className="form-label fs-base">Dirección del evento</label>
            <input type="text"
              id="direccion" className="form-control form-control-lg"
              {...register('direccion')}
            />
            {errors.direccion && (<AlertErrorForm messageError={errors.direccion.message} />)}
          </div>
          <div className="col-sm-12 col-md-6 mb-4">
            <label htmlFor="url_video" className="form-label fs-base">Url de video youtube (Opcional)</label>
            <input type="text" id="url_video"
              className="form-control form-control-lg"
              {...register('url_video')}
            />
            {errors.url_video && (<AlertErrorForm messageError={errors.url_video.message} />)}
          </div>
          <div className="col-sm-12 mb-4">
            <label htmlFor="categorias" className="form-label fs-base">Selecciona las categorias a las que pertenece tu evento</label>
            <Controller
              name="categorias"
              control={control}
              render={({ field }) =>
              <Select
                  {...field}
                  placeholder="Selecciona las categorias del evento"
                  isMulti
                  options={categories}
                />}
            />
            {errors.categorias && (<AlertErrorForm messageError={errors.categorias.message} />)}
          </div>
          <div className="col-sm-12 col-md-6 mb-4">
            <label htmlFor="foto_evento" className="form-label fs-base">Foto de evento</label>
            <input
              type="file"
              id="foto_evento"
              className="form-control form-control-lg fw-bold"
              {...register('foto_evento')}
            />
            {errors.foto_evento && (<AlertErrorForm messageError={errors.foto_evento.message} />)}
          </div>
          <div className="col-sm-12 col-md-6 mb-4">
            <label htmlFor="itinerario_evento" className="form-label fs-base">Itinerario de evento (.pdf)</label>
            <input type="text" id="itinerario_evento"
              className="form-control form-control-lg"
              {...register('itinerario_evento')}
            />
            {errors.itinerario_evento && (<AlertErrorForm messageError={errors.itinerario_evento.message} />)}
          </div>
          <div className="col-sm-12">
            {previewSource && (<img src={previewSource} alt="chosenIMG" style={{ height: '300px' }} />)}
          </div>
        </div>

        <FormButtons backPage="/crear-evento"/>
      </form>
    </>
  )
}
