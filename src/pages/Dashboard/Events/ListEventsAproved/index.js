import React, { useEffect, useState } from 'react'
import { CardEventDashboard } from '../../../../components/Dashboard/CardEventDashboard'
import { eventService } from '../../../../services/event.service'

export const ListEventsAproved = () => {
  const [fetch, setFetched] = useState(false)
  const [eventsAproved, setEventsAproved] = useState([])

  useEffect(() => {
    const getEvents = async () => {
      const events = await eventService.getAllEvents()
      setEventsAproved(events)
    }
    getEvents()
  }, [fetch])
  return (
    <>
      <h1 className="mb-2 mb-md-0">
        Eventos publicados
      </h1>
      {/* Events */}
      <div className="container-fluid">
        <div className="row">
          {
            eventsAproved.map(e => (
              <div key={e.id_evento} className="col-12">
                <CardEventDashboard
                  {...e} setFetched={setFetched}
                  fetch={fetch}
                />
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
