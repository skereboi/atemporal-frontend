import React from 'react'

export const GetAllEventsPage = () => {
  return (
    <section className="position-relative py-5">
      {/* Gradient BG */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary opacity-10" />
      {/* Content */}
      <div className="container position-relative zindex-2 py-lg-4">
        <div className="row">
          <div className="col-lg-5 d-flex flex-column pt-lg-4 pt-xl-5">
            <h5 className="my-2">Welcome!</h5>
            <h1 className="display-3 mb-4">Learn <span className="text-primary">IT Online</span> with No Limits</h1>
            <p className="fs-lg mb-5">Enjoy our great selection of IT courses. Choose from more than 25K online video courses and become an IT expert now!</p>
            {/* Desktop form */}
            <form className="d-none d-sm-flex mb-5">
              <div className="input-group d-block d-sm-flex input-group-lg me-3">
                <input type="text" className="form-control w-50" placeholder="Search courses..." />
                <select className="form-select w-50">
                  <option value selected disabled>Categories</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Development">Mobile Development</option>
                  <option value="Programming">Programming</option>
                  <option value="Game Development">Game Development</option>
                  <option value="Software Testing">Software Testing</option>
                  <option value="Software Engineering">Software Engineering</option>
                  <option value="Network & Security">Network &amp; Security</option>
                </select>
              </div>
              <button type="submit" className="btn btn-icon btn-primary btn-lg">
                <i className="bx bx-search" />
              </button>
            </form>
            {/* Mobile form */}
            <form className="d-sm-none mb-5">
              <input type="text" className="form-control form-control-lg mb-2" placeholder="Search courses..." />
              <select className="form-select form-select-lg mb-2">
                <option value selected disabled>Categories</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile Development">Mobile Development</option>
                <option value="Programming">Programming</option>
                <option value="Game Development">Game Development</option>
                <option value="Software Testing">Software Testing</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Network & Security">Network &amp; Security</option>
              </select>
              <button type="submit" className="btn btn-icon btn-primary btn-lg w-100 d-sm-none">
                <i className="bx bx-search" />
              </button>
            </form>
            <div className="d-flex align-items-center mt-auto mb-3 mb-lg-0 pb-4 pb-lg-0 pb-xl-5">
              <div className="d-flex me-3">
                <div className="d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: 52, height: 52 }}>
                  <img src="assets/img/avatar/08.jpg" className="rounded-circle" width={48} alt="Avatar" />
                </div>
                <div className="d-flex align-items-center justify-content-center bg-white rounded-circle ms-n3" style={{ width: 52, height: 52 }}>
                  <img src="assets/img/avatar/15.jpg" className="rounded-circle" width={48} alt="Avatar" />
                </div>
                <div className="d-flex align-items-center justify-content-center bg-white rounded-circle ms-n3" style={{ width: 52, height: 52 }}>
                  <img src="assets/img/avatar/16.jpg" className="rounded-circle" width={48} alt="Avatar" />
                </div>
              </div>
              <span className="fs-sm"><span className="text-primary fw-semibold">10K+</span> students are already with us</span>
            </div>
          </div>
          <div className="col-lg-7">
            {/* Parallax gfx */}
            <div className="parallax mx-auto me-lg-0" style={{ maxWidth: 648 }}>
              <div className="parallax-layer" data-depth="0.1">
                <img src="assets/img/landing/online-courses/hero/layer01.png" alt="Layer" />
              </div>
              <div className="parallax-layer" data-depth="0.13">
                <img src="assets/img/landing/online-courses/hero/layer02.png" alt="Layer" />
              </div>
              <div className="parallax-layer zindex-5" data-depth="-0.12">
                <img src="assets/img/landing/online-courses/hero/layer03.png" alt="Layer" />
              </div>
              <div className="parallax-layer zindex-3" data-depth="0.27">
                <img src="assets/img/landing/online-courses/hero/layer04.png" alt="Layer" />
              </div>
              <div className="parallax-layer zindex-1" data-depth="-0.18">
                <img src="assets/img/landing/online-courses/hero/layer05.png" alt="Layer" />
              </div>
              <div className="parallax-layer zindex-1" data-depth="0.1">
                <img src="assets/img/landing/online-courses/hero/layer06.png" alt="Layer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
