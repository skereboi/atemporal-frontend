import React, { useState } from 'react'
export const GeneralContext = React.createContext()

export const GeneralProvider = (props) => {
  const [errorMessage, setErrorMessage] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const values = {
    setErrorMessage,
    errorMessage,
    setIsLoading,
    isLoading
  }

  return <GeneralContext.Provider value={values} {...props}/>
}
