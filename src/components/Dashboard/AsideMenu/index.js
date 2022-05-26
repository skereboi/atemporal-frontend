import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../../../data'
import { useAuth } from '../../../hooks/useAuth'
import './style.scss'

export const AsideMenu = () => {
  const { user } = useAuth()
  return (
    <aside className="aside-menu border-end pb-5 mt-n5">
      <div className="top-0">
        <div className="text-center pt-5">
          <div className="d-table position-relative mx-auto mb-3">
            <b>Administrador</b>
          </div>
          <h2 className="h5 mb-1">
            {user.nombre}
          </h2>
          <p className="mb-3 pb-3">{user.email}</p>
          <button type="button" className="btn btn-secondary w-100 d-md-none mt-n2 mb-3" data-bs-toggle="collapse" data-bs-target="#account-menu">
            <i className="bx bxs-user-detail fs-xl me-2" />
            {data.menuAccount.title}
            <i className="bx bx-chevron-down fs-lg ms-1" />
          </button>
          <div id="account-menu" className="list-group list-group-flush collapse d-md-block">
            {
              data.menuDashboard.options.map(option => (<MenuOptionAccount key={option.id} {...option} />))
            }
          </div>
        </div>
      </div>
    </aside>

  )
}
const MenuOptionAccount = (props) => (
  <Link to={props.pathname} className="list-group-item list-group-item-action d-flex align-items-center ">
    <i className={`${props.icon} fs-xl opacity-60 me-2`} />
    {props.title}
  </Link>
)
