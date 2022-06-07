import React from 'react'
import { Outlet } from 'react-router-dom'
import { ErrorHandler } from '../../components/Alerts/ErrorHandler'
import { Footer } from '../../components/Footer'
import { Navbar } from '../../components/Navbar'
import { useGeneralApp } from '../../hooks/useGeneralApp'
import { useScrollToTop } from '../../hooks/useScrollToTop'

export const Layout = ({ type = 'user' }) => {
  useScrollToTop()
  const { errorMessage } = useGeneralApp()
  return (
    <>
      <Navbar />
      <div className="main-app" style={{ position: 'relative' }}>
        {
          errorMessage && (<ErrorHandler message={errorMessage} />)
        }
        <Outlet />
      </div>
      {
        type === 'user' && (<Footer />)
      }
    </>
  )
}
// Layout.propTypes = {
//   children: PropTypes.element
// }
