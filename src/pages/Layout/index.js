import React from 'react'
import PropTypes from 'prop-types'
import { Navbar } from '../../components/Navbar'

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.element
}
