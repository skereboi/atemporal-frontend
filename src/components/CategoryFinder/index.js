import React from 'react'

export const CategoryFinder = () => {
  return (
    <div className="col-lg-7 col-md-8">
      <form className="row gy-2">
        <div className="col-lg-5 col-sm-6">
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center me-sm-4 me-3">
              <a href="blog-list-no-sidebar.html" className="nav-link me-2 p-0">
                <i className="bx bx-list-ul fs-4" />
              </a>
              <a href="blog-grid-no-sidebar.html" className="nav-link p-0 active">
                <i className="bx bx-grid-alt fs-4" />
              </a>
            </div>
            <select className="form-select">
              <option>All categories</option>
              <option value="processes-and-tools">Processes &amp; Tools</option>
              <option value="startups">Startups</option>
              <option value="digital">Digital</option>
              <option value="strategy">Strategy</option>
              <option value="business">Business</option>
            </select>
          </div>
        </div>
        <div className="col-lg-7 col-sm-6">
          <div className="input-group">
            <input type="text" className="form-control pe-5 rounded" placeholder="Search the blog..." />
            <i className="bx bx-search position-absolute top-50 end-0 translate-middle-y me-3 zindex-5 fs-lg" />
          </div>
        </div>
      </form>
    </div>
  )
}
