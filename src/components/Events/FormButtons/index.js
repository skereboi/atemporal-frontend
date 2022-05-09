import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.scss'

export const FormButtons = ({ backPage }) => {
  const navigate = useNavigate()
  return (
    <div className="options-buttons">
      <button onClick={() => navigate(backPage)} className="btn btn-primary mr-3" >Atras</button>
      <button type="submit" className="btn btn-primary" >Siguiente</button>
    </div>
  )
}
