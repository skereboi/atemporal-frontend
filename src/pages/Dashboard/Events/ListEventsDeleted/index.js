import React, { useEffect, useState } from 'react'
import { CardEventDashboard } from '../../../../components/Dashboard/CardEventDashboard'
import { eventService } from '../../../../services/event.service'

export const ListEventsDeleted = () => {
  const [fetch, setFetched] = useState(false)
  const [eventsDeleted, setEventsDeleted] = useState([])

  useEffect(() => {
    const getEvents = async () => {
      const events = await eventService.getAllEventsDeleted()
      setEventsDeleted(events)
    }
    getEvents()
  }, [fetch])
  return (
    <>
      <h1 className="mb-2 mb-md-0">
        Eventos eliminados
      </h1>
      <hr className="opacity-100" />
      <br />
      {/* Events */}
      <div className="container-fluid">
        <div className="row">
          {
            eventsDeleted.map(e => (
              <div key={e.id_evento} className="col-12">
                <CardEventDashboard
                  {...e} setFetched={setFetched}
                  fetch={fetch}
                  fromPublicados={1}
                  fromAprobados={0}
                  fromEliminados={1}
                />
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
