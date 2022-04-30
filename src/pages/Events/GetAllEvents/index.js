import React, { useEffect, useState } from 'react'
import { CardEvent } from '../../../components/CardEvent'
import { CategoryFinder } from '../../../components/CategoryFinder'
import { eventService } from '../../../services/event.service'

export const GetAllEventsPage = () => {
  const [events, setEvents] = useState([])
  useEffect(() => {
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

  return (
    <>
      <div>
        {/* Breadcrumb */}
        <nav className="container mt-lg-4 pt-5" aria-label="breadcrumb">
          <ol className="breadcrumb mb-0 pt-5">
            <li className="breadcrumb-item">
              <a href="index.html"><i className="bx bx-home-alt fs-lg me-1" />Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Blog Grid no Sidebar</li>
          </ol>
        </nav>
        {/* Page content */}
        <section className="container mt-4 mb-lg-5 pt-lg-2 pb-5">
          {/* Page title + Layout switcher + Search form */}
          <div className="row align-items-end gy-3 mb-4 pb-lg-3 pb-1">
            <div className="col-lg-5 col-md-4">
              <h1 className="mb-2 mb-md-0">Blog Grid</h1>
            </div>
            <CategoryFinder/>
          </div>
          {/* Blog grid */}
          <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-md-4 gy-2">
            {/* ALL EVENTS  */}
            {
              events.map(event => (<CardEvent key={event} {...event} />))
            }

          </div>
          {/* Pagination */}
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center pt-md-4 pt-2">
              <li className="page-item">
                <a href="#" className="page-link">
                  <i className="bx bx-chevron-left mx-n1" />
                </a>
              </li>
              <li className="page-item disabled d-sm-none">
                <span className="page-link text-body">2 / 4</span>
              </li>
              <li className="page-item d-none d-sm-block">
                <a href="#" className="page-link">1</a>
              </li>
              <li className="page-item active d-none d-sm-block" aria-current="page">
                <span className="page-link">
                  2
                  <span className="visually-hidden">(current)</span>
                </span>
              </li>
              <li className="page-item d-none d-sm-block">
                <a href="#" className="page-link">3</a>
              </li>
              <li className="page-item d-none d-sm-block">
                <a href="#" className="page-link">4</a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  <i className="bx bx-chevron-right mx-n1" />
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </div>

    </>
  )
}
