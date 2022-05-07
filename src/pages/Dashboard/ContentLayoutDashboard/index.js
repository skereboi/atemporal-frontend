import React from 'react'
import { Outlet } from 'react-router-dom'
import './style.scss'
export const ContentLayoutPage = () => {
  return (
    <div className='content-dashboard'>
      <Outlet/>
    </div>
  )
}
