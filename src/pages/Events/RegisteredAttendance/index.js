import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { eventService } from '../../../services/event.service'
import { reservationService } from '../../../services/reservation.service'
import { useGeneralApp } from '../../../hooks/useGeneralApp'
import JSPDF from 'jspdf'

export const RegisteredAttendancePage = () => {
  const { isLoading, setIsLoading } = useGeneralApp()
  const [event, setEvent] = useState({})
  const [qrImage, setQrImage] = useState('default')
  const { idEvento } = useParams()
  useEffect(() => {
    const getDataReservation = async () => {
      try {
        const dbEvent = await eventService.getOneEvent(idEvento)
        setEvent(dbEvent)
      } catch (error) {
        console.log(error.response.status)
        setEvent(null)
      }
    }

    getDataReservation()
  }, [])

  useEffect(() => {
    const getQR = async () => {
      try {
        const QR_CODE = await reservationService.getReservationQrByIdEventIdUser(idEvento)
        setQrImage(QR_CODE.codigo_qr)
      } catch (error) {
        console.log(error)
        setQrImage('https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia-1280x720.jpg')
      }
    }

    getQR()
  }, [])

  if (event === null) {
    return <Navigate to="/recurso-no-encontrado" />
  }

  const handlerDownloadQR = () => {
    try {
      setIsLoading(true)
      const doc = new JSPDF('p', 'pt')
      doc.text(200, 200, `Tu codigo QR, evento: ${event.nombre_evento}`)
      doc.addImage(qrImage, 'JPEG', 250, 250)
      doc.save(`${event.nombre_evento}`)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }
  return (
    <section className="d-flex align-items-center min-vh-100 py-5 bg-light" style={{ background: 'radial-gradient(144.3% 173.7% at 71.41% 94.26%, rgba(99, 102, 241, 0.1) 0%, rgba(218, 70, 239, 0.05) 32.49%, rgba(241, 244, 253, 0.07) 82.52%)' }}>
      <div className="container my-5 text-md-start text-center">
        <div className="row align-items-center">
          {/* Text */}
          <div className="col-md-8  order-md-1">
            <h1 className="display-1 mb-sm-4 mt-n4 mt-sm-n5">Has reservado el evento</h1>
            <p className="mb-md-5 mb-4 mx-md-0 mx-auto pb-2 lead">Revisa tu bandeja de correo ahi tendrás el código QR</p>
            <Link to='/mi-cuenta/reservaciones' className="btn btn-lg btn-primary shadow-primary w-sm-auto w-100">
              <i className="bx bx-home-alt= me-2 ms-n1 lead" />
              Ver tus reservaciones
            </Link>
          </div>
          <div className="col-md-4  order-md-1">
            <img src={event.foto_evento} className="display-1 mb-sm-4 mt-n4 mt-sm-n5"/>
            <p className="mb-md-5 mb-4 mx-md-0 mx-auto pb-2 lead">
              {event.nombre_evento}
            </p>
            <button onClick={handlerDownloadQR}
              disabled={isLoading}
              className="btn btn-lg btn-primary shadow-primary w-sm-auto w-100">
              <i className="bx bx-home-alt= me-2 ms-n1 lead" />
              Descargar tu código QR
            </button>
          </div>
        </div>
      </div>

    </section>
  )
}
