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
      <h1 className="mb-2 mb-md-0">Aprobar eventos</h1>
      {/* Events */}
      {
        eventsToAprove.map(e => (<EventToAprove key={e.nombre_evento} {...e} setAproved={setAproved} aproved={aproved} />))
      }
    </>
  )
}
