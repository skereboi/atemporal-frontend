import React from 'react'
import { Outlet } from 'react-router-dom'
import { AccounteMenu } from '../AccountMenu'

export const AccountLayout = () => {
  return (
    <section className="container">
      <div className="row">
        <AccounteMenu />
        <div className="col-md-8 offset-lg-1 pb-5 mb-2 mb-lg-4 pt-md-5 mt-n3 mt-md-0">
        <Outlet/>
        </div>
      </div>
    </section>
  )
}
