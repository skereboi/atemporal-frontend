import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGeneralApp } from '../../../hooks/useGeneralApp'
import './style.scss'

export const FormButtons = ({ backPage, msgNextBtn = 'Siguiente' }) => {
  const { isLoading } = useGeneralApp()
  const navigate = useNavigate()
  return (
    <div className="options-buttons">
      <button onClick={() => navigate(backPage)} className="btn btn-primary mr-3 btn-lg" >Atras</button>
      <button type="submit" className="btn btn-primary btn-lg" disabled={isLoading} >{msgNextBtn}</button>
    </div>
  )
}
