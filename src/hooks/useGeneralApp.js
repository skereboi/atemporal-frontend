import React from 'react'
import { GeneralContext } from '../context/general.context'

export const useGeneralApp = () => {
  const context = React.useContext(GeneralContext)
  if (!context) {
    throw new Error('useGeneralApp debe estar dentro del proveedor General AppContext')
  }
  return context
}
