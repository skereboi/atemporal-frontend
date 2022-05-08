import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { data } from '../../../data'

export const MenuCreateEvent = () => {
  const { menuEvent } = data
  return (
    <>
      {/* Sidebar (User info + Account menu) */}
      <aside className="col-lg-3 col-md-4 border-end pb-5 mt-n5">
        <div className="position-sticky top-0">
          <div className="text-center pt-5">
            <h2 className="h5 mb-1">Crear evento</h2>
            <p className="mb-3 pb-3">Publica tu evento gratis</p>
            <div id="account-menu" className="list-group list-group-flush collapse d-md-block">

              {
                menuEvent.steps.map(step => (<MenuLink {...step} key={step.id}/>))
              }
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
const MenuLink = (props) => {
  const { pathname } = useLocation()
  return (

    <Link to={props.link}
      className={`list-group-item list-group-item-action d-flex align-items-center my-2 ${pathname === props.pathname ? 'active' : ''}`}
    >
      <i className={`${props.icon} fs-xl opacity-60 me-2`} />
      {props.title}
    </Link>
  )
}
