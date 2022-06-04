import React, { useEffect, useState } from 'react'
import { CategoryDropdown } from '../../../components/CategoryDropdown'
import { TextFinder } from '../../../components/TextFinder'
import { CardEvent } from '../../../components/Events/CardEvent'
import { eventService } from '../../../services/event.service'
import { useAuth } from '../../../hooks/useAuth'
import { NothingToShow } from '../../../components/Dashboard/NothingToShow'
import './style.scss'

export const EventDiscoverPage = ({ isAdmin }) => {
  // Estados
  const [events, setEvents] = useState([])
  const [isRejected, setIsRejected] = useState(false)
  const [categorySelected, setCategorySelected] = useState(null)
  const [categoryName, setCategoryName] = useState(null)
  const [textToFind, setTextToFind] = useState(null)

  // hooks
  const { user } = useAuth()

  // Efectos
  useEffect(() => {
    const getEvents = async () => {
      try {
        const isDropDefault = ((categorySelected === null) || (categorySelected === '0'))
        const isTextEmpty = ((textToFind === null) || (textToFind === ''))
        // Efecto por defecto
        if (isDropDefault) {
          const dbEvents = await eventService.getAllEventsPublic()
          setEvents(dbEvents)
        }
        // Efecto con categoria seleccionada
        if (!isDropDefault) {
          const dbEvents = await eventService.getEventsByCategory(parseInt(categorySelected))
          setEvents(dbEvents)
        }
        // Efecto con teexto ingresado
        if (!isTextEmpty) {
          const dbEvents = await eventService.getEventsByTextSearch(textToFind)
          setEvents(dbEvents)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getEvents()
  }, [categorySelected, isRejected, textToFind])

  const handlerOnSubmit = (event) => {
    event.target.preventDefault()
  }

  return (
    <>
        {/* Page content */}
        <section className="container mt-4 mb-lg-5 pt-lg-2 pb-5 event-discover">
          {/* Page title + Layout switcher + Search form */}
          <div className="row align-items-end gy-3 mb-4 pb-lg-3 pb-1">
            <div className="col-lg-5 col-md-4">
              <h1 className="mb-2 mb-md-0">
                Descubre eventos
              </h1>
            </div>
            <div className="col-lg-7 col-md-8">
              <form className="row gy-2" onSubmit={handlerOnSubmit}>
                <CategoryDropdown setCategorySelected={setCategorySelected} setCategoryName={setCategoryName} />
                <TextFinder setTextToFind={setTextToFind} />
              </form>
            </div>
          </div>
          {/* Blog grid */}
          <div className="row">
          {/* ALL EVENTS  */}

          {
            events.length === 0
              ? (
                <NothingToShow
                title='¡Oh no!'
                subtitle='Lo sentimos mucho, pero al dia de hoy no tenemos registro que coincida con la busqueda'
                message={textToFind || categoryName}
                />
                )
              : events.map((event) => (
                <div className="col-12 col-md-3"
                  key={event.id_evento}
                >
                  <CardEvent
                    setIsRejected={setIsRejected}
                    isRejected={isRejected}
                    isAdmin={isAdmin}
                    {...event}
                  />
                </div>
              ))
            }
          </div>
        {/* Pagination */}

        </section>
    </>
  )
}
