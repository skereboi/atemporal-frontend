import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../../data'
import { useAuth } from '../../hooks/useAuth'
import { Profile } from '../Profile'
import './style.scss'

export const MenuAuthenticated = () => {
  const { user: { typeUser } } = useAuth()
  return (
    <div className='menu-authenticated'>
      {
        typeUser === 'general' && (
          <div className="menu-web">
            <ul className="navbar-nav me-auto">
              {
                data
                  .menuNavbar[typeUser].options.map(
                    op =>
                      (
                      <li key={op.id} className="nav-item">
                        <Link to={op.pathname}
                          className={`nav-link ${location.pathname === op.pathname && 'active'}`}>
                          {op.title}
                        </Link>
                      </li>
                      )
                  )
              }
            </ul>
          </div>
        )
      }
      <Profile />
    </div>
  )
}

export const MenuMobile = () => {
  const { user: { typeUser } } = useAuth()
  return (
    <>
      {
        data
          .menuNavbar[typeUser].options.map(
            op => (
              <span key={op.id}>
                <div className="dropdown-divider" />
                <Link to={op.pathname} className='p-4'>
                  {op.title}
                </Link>
              </span>
            )
          )
      }
    </>
  )
}
