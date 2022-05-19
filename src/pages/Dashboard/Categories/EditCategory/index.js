import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AlertErrorForm } from '../../../../components/AlertErrorForm'
import { useGeneralApp } from '../../../../hooks/useGeneralApp'
import { categoryService } from '../../../../services/category.service'

export const EditCategory = () => {
  const navigate = useNavigate()
  const { setErrorMessage, isLoading, setIsLoading } = useGeneralApp()
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const { id } = useParams()

  useEffect(() => {
    const getCategory = async () => {
      try {
        const category = await categoryService.getOneCategory(id)
        reset({ ...category })
      } catch (error) {
        console.log(error)
      }
    }
    getCategory()
  }, [id])

  const onSubmit = async (data) => {
    setIsLoading(true)

    try {
      await categoryService.updateOneCategory(id, data)
      setIsLoading(false)
      navigate(-1)
    } catch (error) {
      setIsLoading(false)
      if (error.response.data.msg[0].type) {
        setErrorMessage('ERROR FRONTEND')
      } else {
        setErrorMessage(error.response.data.msg)
      }
    }
  }
  return (
    <>
      <div className="row mb-5 justify-content-center">
        <div className="col-md-8">
          <h1>Editar categoria</h1>
        </div>
        <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
          <Link to="/dashboard/usuarios" className='btn btn-sm btn-primary'>Regresar</Link>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-12">
                <div className="position-relative mb-4">
                  <label htmlFor="name" className="form-label fs-base">
                    Nombre de categoria</label>
                  <input type="text" id="name"
                    className="form-control form-control-lg"
                    {...register('nombre', { required: true })}
                    autoComplete="off"
                  />
                  <AlertErrorForm messageError={errors.nombre?.message} />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary shadow-primary btn-lg w-100" disabled={isLoading}>Guardar cambios</button>
          </form>
        </div>
      </div>
    </>
  )
}
