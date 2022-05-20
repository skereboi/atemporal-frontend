import React from 'react'
import { EventDetailCard } from '../../../components/Dashboard/EventDetailCard'

export const AccountPublications = () => {
  const arr = [1, 2, 3, 4, 5]
  return (
    <>
      {/* Account collections */}
      <div className="pb-5 mb-lg-2 mt-md-0">
        <div className="ps-md-3 ps-lg-0 mt-md-2 pt-md-4 pb-md-2">
          <div className="d-sm-flex align-items-center justify-content-between pt-xl-1 mb-3 pb-3">
            <h1 className="h2 mb-sm-0">Mis eventos publicados</h1>
            <select className="form-select" style={{ maxWidth: '15rem' }}>
              <option value="Published">Ordenar</option>
              <option value="Category">Más reciente</option>
              <option value="Title AZ">Más viejo</option>
            </select>
          </div>
          {
            arr.map(e => (<EventDetailCard type="publication" key={e}/>))
          }

        </div>
      </div>

    </>
  )
}
