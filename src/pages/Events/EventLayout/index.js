import React from 'react'
import { Outlet } from 'react-router-dom'
import { MenuCreateEvent } from '../../../components/Events/MenuCreateEvent'

export const EventLayout = () => {
  return (
    <>
      {/* Page content */}
      <section className="container pt-5">
        <div className="row">
          {/* Account details */}
          <div className="col-md-8 offset-lg-1 pb-5 mb-2 mb-lg-4 pt-md-5 mt-n3 mt-md-0">
            <div className="ps-md-3 ps-lg-0 mt-md-2 py-md-4">
              <Outlet/>
            </div>
          </div>
          <MenuCreateEvent />
        </div>
      </section>
    </>
  )
}
