import React from 'react'

export const Step = (props) => {
  const { id, title, description } = props
  return (
    <div className="step pt-0 pt-md-3 pb-5">
      <div className="step-number">
        <div className="step-number-inner">{id }</div>
      </div>
      <div className="step-body d-flex align-items-center ps-xl-5">
        <div className="rellax d-none d-lg-block flex-shrink-0 mx-4 mx-xl-5" data-rellax-percentage="0.5" data-rellax-speed="-0.3" data-disable-parallax-down="lg">
          {/* <img src="assets/img/landing/online-courses/steps/01-dark.svg" className="d-dark-mode-none" width={306} alt="Illustration" />
          <img src="assets/img/landing/online-courses/steps/01-light.svg" className="d-none d-dark-mode-block" width={306} alt="Illustration" /> */}
        </div>
        <div className="rellax ps-md-4 ps-xl-5" data-rellax-percentage="0.5" data-rellax-speed="0.4" data-disable-parallax-down="lg">
          <h3 className="h4">{title}</h3>
          <p className="mb-0">{ description}</p>
        </div>
      </div>
    </div>
  )
}
