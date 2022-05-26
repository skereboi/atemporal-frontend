import React, { useEffect, useState } from 'react'
import { eventService } from '../../../services/event.service'

export const DashboardHomePage = () => {
  const [totalAproved, setTotalAproved] = useState([])
  const [totalToAproved, setTotalToAproved] = useState([])
  const [totalDeleted, setTotalDeleted] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const totalA = await eventService.getAllEventsAproved()
        setTotalAproved(totalA)
        const totalTo = await eventService.getAllEventsToAproved()
        setTotalToAproved(totalTo)
        const totalD = await eventService.getAllEventsDeleted()
        setTotalDeleted(totalD)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <div className="row mt-5">
      <div className="col-md-4">
        <div className="card text-white bg-primary">
          <div className="card-header border-light">Eventos pendientes por aprobar</div>
          <div className="card-body">
            <h5 className="card-title text-white">
              {
                totalToAproved.length
              }
            </h5>
            <p className="card-text fs-sm">Total de eventos pendientes</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-white bg-success">
          <div className="card-header border-light">Eventos publicados</div>
          <div className="card-body">
            <h5 className="card-title text-white">
              {
                totalAproved.length
              }
            </h5>
            <p className="card-text fs-sm">
              Todos los eventos aprobados
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-white bg-danger">
          <div className="card-header border-light">Eventos rechazados</div>
          <div className="card-body">
            <h5 className="card-title text-white">
              {
                totalDeleted.length
              }
            </h5>
            <p className="card-text fs-sm">Todos los elementos eliminados</p>
          </div>
        </div>

      </div>
    </div>
  )
}
