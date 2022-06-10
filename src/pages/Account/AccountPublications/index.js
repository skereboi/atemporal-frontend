import React, { useEffect, useState } from 'react'
import { EventDetailCard } from '../../../components/Dashboard/EventDetailCard'
import { userService } from '../../../services/user.service'

export const AccountPublications = () => {
  const [publications, setPublications] = useState([])
  useEffect(() => {
    const getAllReservations = async () => {
      try {
        const reservaciones = await userService.getAllPublicationsAproved()
        setPublications(reservaciones)
      } catch (error) {
        console.log(error)
      }
    }

    getAllReservations()
  }, [])
  return (
    <>
      {/* Account collections */}
      <div className="pb-5 mb-lg-2 mt-md-0">
        <div className="ps-md-3 ps-lg-0 mt-md-2 pt-md-4 pb-md-2">
          <div className="d-sm-flex align-items-center justify-content-between pt-xl-1 mb-3 pb-3">
            <h1 className="h2 mb-sm-0">Mis eventos publicados</h1>
            <select className="form-select" style={{ maxWidth: '15rem' }}>
              <option value="Published">Ordenar</option>
              <option value="Category">Más reciente</option>
              <option value="Title AZ">Más viejo</option>
            </select>
          </div>
          {
            publications.map(pub => (<EventDetailCard type="publicacion" key={pub.evento.id_evento}/>))
          }

        </div>
      </div>

    </>
  )
}
