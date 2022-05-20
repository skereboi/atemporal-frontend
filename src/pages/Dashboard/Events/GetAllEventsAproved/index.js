import React, { useEffect, useState } from 'react'
import { CardEvent } from '../../../../components/Events/CardEvent'
import { eventService } from '../../../../services/event.service'

export const GetAllEventsAproved = () => {
  const [aproved, setAproved] = useState(false)
  const [eventsAproved, setEventsAproved] = useState([])

  useEffect(() => {
    const getEvents = async () => {
      const events = await eventService.getAllEvents()
      setEventsAproved(events)
      console.log('eefect')
    }
    getEvents()
  }, [aproved])
  return (
    <>
      <h1 className="mb-2 mb-md-0">Aprobar eventos</h1>
      {/* Events */}
      <div className="row">
        {
          eventsAproved.map(e => (
            <div key={e.nombre_evento} className="col-12 col-md-4">
              <CardEvent
                {...e} setAproved={setAproved}
                aproved={aproved}
              />
            </div>
          ))
        }
      </div>
    </>
  )
}
