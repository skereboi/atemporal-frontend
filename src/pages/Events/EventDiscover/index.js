import React, { useEffect, useState } from 'react'
import { CategoryDropdown } from '../../../components/CategoryDropdown'
import { TextFinder } from '../../../components/TextFinder'
import { CardEvent } from '../../../components/Events/CardEvent'
import { eventService } from '../../../services/event.service'
import { useAuth } from '../../../hooks/useAuth'
import { useLocation } from 'react-router-dom'

export const EventDiscoverPage = () => {
  const [events, setEvents] = useState([])
  const location = useLocation()
  const { user } = useAuth()
  useEffect(() => {
    console.log('A: ', idSelected)

    const getEvents = async () => {
      try {
        const dbEvents = await eventService.getAllEvents()
        setEvents(dbEvents)
      } catch (error) {
        console.log(error)
      }
    }
    getEvents()
  }, [])

  const [idSelected, setIdSelected] = useState([])
  useEffect(() => {
    console.log('A: ', idSelected)
    const getEventsByCategory = async (idSelected) => {
      try {
        const dbEventsByCategory = await eventService.getEventsByCategory(idSelected)
        setIdSelected(dbEventsByCategory) // Nuevo set?
      } catch (error) {
        console.log(error)
      }
    }

    getEventsByCategory(idSelected)
  }, [idSelected])

  return (
    <>
        {/* Page content */}
        <section className="container mt-4 mb-lg-5 pt-lg-2 pb-5">
          {/* Page title + Layout switcher + Search form */}
          <div className="row align-items-end gy-3 mb-4 pb-lg-3 pb-1">
            <div className="col-lg-5 col-md-4">
              <h1 className="mb-2 mb-md-0">
                {
                location.pathname === '/dashboard/eventos'
                  ? 'Aprobar eventos'
                  : 'Descubre eventos'
                }
              </h1>
            </div>
            {
              user?.typeUser === 'general' && (
                <div className="col-lg-7 col-md-8">
                <form className="row gy-2">
                  <CategoryDropdown />
                  <TextFinder />
                </form>
                </div>
              )
            }
          </div>
          {/* Blog grid */}
          <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-md-4 gy-2">
            {/* ALL EVENTS  */}
            {
              events.map((event) => (<CardEvent key={event.id_evento} {...event} />))
            }
          </div>
          {/* Pagination */}

        </section>
    </>
  )
}
