import React from 'react'
import { Outlet } from 'react-router-dom'
import { ErrorHandler } from '../../components/Alerts/ErrorHandler'
import { Navbar } from '../../components/Navbar'
import { useGeneralApp } from '../../hooks/useGeneralApp'

export const Layout = () => {
  const { errorMessage } = useGeneralApp()
  return (
    <>
      <Navbar />
      {
        errorMessage && (<ErrorHandler message={errorMessage}/>)
      }
      <Outlet />
    </>
  )
}
// Layout.propTypes = {
//   children: PropTypes.element
// }
