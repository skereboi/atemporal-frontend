import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { eventService } from '../../../services/event.service'

export const GetOneEventPage = () => {
  const { idEvento } = useParams()
  const navigate = useNavigate()
  const [event, setEvent] = useState({})
  useEffect(() => {
    const getEvents = async () => {
      try {
        const dbEvent = await eventService.getOneEvent(idEvento)
        setEvent(dbEvent)
      } catch (error) {
        console.log(error.response.status)
        setEvent(null)
      }
    }

    getEvents()
  }, [])

  if (event === null) {
    navigate('/not-found')
  }
  return (
    <h3>GetOneEventPage =
      {
        idEvento
      }
      {
        JSON.stringify(event)
      }
    </h3>
  )
}
