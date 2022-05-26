import React from 'react'
import { Outlet } from 'react-router-dom'
import { AsideMenu } from '../../../components/Dashboard/AsideMenu'
import './style.scss'
export const ContentLayoutPage = () => {
  return (
    <>
      <div className='container'>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12">
            <AsideMenu />
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12">
            <div className="content-dashboard">
              <div className="row mt-5 mb-5 pb-5">
                <Outlet />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
