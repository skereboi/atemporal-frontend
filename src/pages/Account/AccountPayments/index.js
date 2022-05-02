import React from 'react'

export const AccountPayment = () => {
  return (
    <>
      {/* Account collections */}
      <div className="col-md-8 offset-lg-1 pb-5 mb-2 mb-lg-4 pt-md-5 mt-n3 mt-md-0">
        <div className="ps-md-3 ps-lg-0 mt-md-2 pt-md-4 pb-md-2">
          <h1 className="h2 pt-xl-1 mb-3 pb-2 pb-lg-3">Tus métodos de pago</h1>
          <h2 className="h5 text-primary mb-4">Tus métodos de pago guardados</h2>
          {/* Item */}
          <div className="card d-sm-flex flex-sm-row align-items-sm-center justify-content-between border-0 shadow-sm p-3 p-md-4 mb-4">
            <div className="d-flex align-items-center pe-sm-3">
              {/* <img src="assets/img/account/mastercard.svg" width={84} alt="Mastercard" /> */}
              <div className="ps-3 ps-sm-4">
                <h6 className="mb-2">**** **** **** 4298 <span className="badge bg-success ms-1">Principal</span></h6>
                <div className="fs-sm">Expiración 09/26</div>
              </div>
            </div>
            <div className="d-flex justify-content-end pt-3 pt-sm-0">
              <button type="button" className="btn btn-outline-secondary px-3 px-xl-4 me-3">
                <i className="bx bx-edit fs-xl me-lg-1 me-xl-2" />
                <span className="d-none d-lg-inline">Editar</span>
              </button>
              <button type="button" className="btn btn-outline-danger px-3 px-xl-4">
                <i className="bx bx-trash-alt fs-xl me-lg-1 me-xl-2" />
                <span className="d-none d-lg-inline">Eliminar</span>
              </button>
            </div>
          </div>
          {/* Item */}
          <div className="card d-sm-flex flex-sm-row align-items-sm-center justify-content-between border-0 shadow-sm p-3 p-md-4 mb-4">
            <div className="d-flex align-items-center pe-sm-3">
              {/* <img src="assets/img/account/visa.svg" width={84} alt="Visa" /> */}
              <div className="ps-3 ps-sm-4">
                <h6 className="mb-2">**** **** **** 9276</h6>
                <div className="fs-sm">Expiración 11/25</div>
              </div>
            </div>
            <div className="d-flex justify-content-end pt-3 pt-sm-0">
              <button type="button" className="btn btn-outline-secondary px-3 px-xl-4 me-3">
                <i className="bx bx-edit fs-xl me-lg-1 me-xl-2" />
                <span className="d-none d-lg-inline">Editar</span>
              </button>
              <button type="button" className="btn btn-outline-danger px-3 px-xl-4">
                <i className="bx bx-trash-alt fs-xl me-lg-1 me-xl-2" />
                <span className="d-none d-lg-inline">Eliminar</span>
              </button>
            </div>
          </div>
          <div className="py-2">
            <button type="button" className="btn btn-primary ps-4">
              <i className="bx bx-plus fs-xl me-2" />
              Agregar un nuevo método de pago
            </button>
          </div>
        </div>
      </div>

    </>
  )
}
