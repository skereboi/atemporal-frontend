import React, { useEffect, useState } from 'react'
import { EventToAprove } from '../../../components/EventToAprove'
import { eventService } from '../../../services/event.service'

export const AproveEventPage = () => {
  const [aproved, setAproved] = useState(false)
  const [eventsToAprove, setEventsToAprove] = useState([])

  useEffect(() => {
    const getEvents = async () => {
      const events = await eventService.getAllEvents(0)
      setEventsToAprove(events)
      console.log('eefect')
    }
    getEvents()
  }, [aproved])
  return (
    <>
      {/* Page content */}
      <section className="container mt-4 mb-lg-5 pt-lg-2 pb-5">
        {/* Page title + Layout switcher + Search form */}
        <div className="row align-items-end gy-3 mb-4 pb-lg-3 pb-1">
          <div className="col-lg-5 col-md-4">
            <h1 className="mb-2 mb-md-0">Aprobar eventos</h1>
          </div>
        </div>
        {/* Events */}
        {
          eventsToAprove.map(e => (<EventToAprove key={e.nombre_evento} {...e} setAproved={setAproved} aproved={aproved} />))
        }

        {/* Pagination */}
      </section>
    </>
  )
}
