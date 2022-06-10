import React, { useEffect, useMemo, useState } from 'react'
import { EventDetailCard } from '../../../components/Dashboard/EventDetailCard'
import { reservationService } from '../../../services/reservation.service'

export const AccountEvents = () => {
  const [reservations, setReservations] = useState([])
  useEffect(() => {
    const getAllReservations = async () => {
      try {
        const reservaciones = await reservationService.getAllReservationsById()
        setReservations(reservaciones)
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
            <h1 className="h2 mb-sm-0">Mis reservaciones</h1>
            <select className="form-select" style={{ maxWidth: '15rem' }}>
              <option value="Published">Ordenar</option>
              <option value="Category">Más reciente</option>
              <option value="Title AZ">Más viejo</option>
            </select>
          </div>
          {
            reservations.map(reservation => (
              <EventDetailCard
                type="reservacion"
                key={reservation.id_evento}
                {...reservation} />)
            )
          }
        </div>
      </div>

    </>
  )
}
