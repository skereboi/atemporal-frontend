import React, { useEffect, useState } from 'react'
import { CardEventDashboard } from '../../../../components/Dashboard/CardEventDashboard'
import { eventService } from '../../../../services/event.service'

export const AproveEvents = () => {
  const [fetch, setFetched] = useState(false)
  const [eventsToAprove, setEventsToAprove] = useState([])

  useEffect(() => {
    const getEvents = async () => {
      const events = await eventService.getAllEventsToAproved()
      setEventsToAprove(events)
    }
    getEvents()
  }, [fetch])
  return (
    <>
      <h1 className="mb-2 mb-md-0">Eventos por aprobar</h1>
      <hr className="opacity-100" />
      <br />
      {/* Events */}
      <div className="container-fluid">
        <div className="row">
          {
            eventsToAprove
              .map(e =>
                (
                <div
                  key={e.id_evento}
                  className="col-12"
                >
                  <CardEventDashboard
                    {...e}
                    setFetched={setFetched}
                    fetch={fetch}
                    fromPublicados={0}
                    fromAprobados={1} />
                </div>
                ))
          }
        </div>
     </div>
    </>
  )
}
