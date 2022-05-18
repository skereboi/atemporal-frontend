import React from 'react'

export const DashboardHomePage = () => {
  return (
    <div className="row mt-5">
      <div className="col-md-4">
        <div className="card text-white bg-primary">
          <div className="card-header border-light">Eventos registrados</div>
          <div className="card-body">
            <h5 className="card-title text-white">Primary card title</h5>
            <p className="card-text fs-sm">Some quick example text to build on the card title and make up the bulk of the content.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-white bg-success">
          <div className="card-header border-light">Eventos aprobados</div>
          <div className="card-body">
            <h5 className="card-title text-white">Success card title</h5>
            <p className="card-text fs-sm">Some quick example text to build on the card title and make up the bulk of th content.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-white bg-danger">
          <div className="card-header border-light">Eventos rechazados</div>
          <div className="card-body">
            <h5 className="card-title text-white">Danger card title</h5>
            <p className="card-text fs-sm">Some quick example text to build on the card title and make up the bulk of the content.</p>
          </div>
        </div>

      </div>
    </div>
  )
}
