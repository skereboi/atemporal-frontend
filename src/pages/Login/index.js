/* eslint-disable no-unused-vars */
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()

  const from = location.state?.from?.pathname || '/'

  // function handleSubmit (event) {
  //   event.preventDefault()

  //   const formData = new FormData(event.currentTarget)
  //   const username = formData.get('username')

  //   auth.signin(username, () => {
  //     // Send them back to the page they tried to visit when they were
  //     // redirected to the login page. Use { replace: true } so we don't create
  //     // another entry in the history stack for the login page.  This means that
  //     // when they get to the protected page and click the back button, they
  //     // won't end up back on the login page, which is also really nice for the
  //     // user experience.
  //     navigate(from, { replace: true })
  //   })
  // }

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <div>
      {/* Page content */}
      <section className="position-relative h-100 pt-5 pb-4">
        {/* Sign in form */}
        <div className="container d-flex flex-wrap justify-content-center justify-content-xl-start h-100 pt-5">
          <div className="w-100 align-self-end pt-1 pt-md-4 pb-4" style={{ maxWidth: 526 }}>
            <h1 className="text-center text-xl-start">Welcome Back</h1>
            <p className="text-center text-xl-start pb-3 mb-3">Don’t have an account yet? <a href="account-signup.html">Register here.</a></p>
            <form className="needs-validation mb-2" noValidate>
              <div className="position-relative mb-4">
                <label htmlFor="email" className="form-label fs-base">Email</label>
                <input type="email" id="email" className="form-control form-control-lg" required />
                <div className="invalid-feedback position-absolute start-0 top-100">Please enter a valid email address!</div>
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label fs-base">Password</label>
                <div className="password-toggle">
                  <input type="password" id="password" className="form-control form-control-lg" required />
                  <label className="password-toggle-btn" aria-label="Show/hide password">
                    <input className="password-toggle-check" type="checkbox" />
                    <span className="password-toggle-indicator" />
                  </label>
                  <div className="invalid-feedback position-absolute start-0 top-100">Please enter your password!</div>
                </div>
              </div>
              <div className="mb-4">
                <div className="form-check">
                  <input type="checkbox" id="remember" className="form-check-input" />
                  <label htmlFor="remember" className="form-check-label fs-base">Remember me</label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary shadow-primary btn-lg w-100">Sign in</button>
            </form>
            <a href="#" className="btn btn-link btn-lg w-100">Forgot your password?</a>
            <hr className="my-4" />
            <h6 className="text-center mb-4">Or sign in with your social network</h6>
            <div className="row row-cols-1 row-cols-sm-2">
              <div className="col mb-3">
                <a href="#" className="btn btn-icon btn-secondary btn-google btn-lg w-100">
                  <i className="bx bxl-google fs-xl me-2" />
                  Google
                </a>
              </div>
              <div className="col mb-3">
                <a href="#" className="btn btn-icon btn-secondary btn-facebook btn-lg w-100">
                  <i className="bx bxl-facebook fs-xl me-2" />
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="w-100 align-self-end">
            <p className="fs-xs text-center text-xl-start pb-2 mb-0">
              © All rights reserved. Made by
              <a className="nav-link d-inline-block p-0" href="https://createx.studio/" target="_blank" rel="noopener noreferrer">Createx Studio</a>
            </p>
          </div>
        </div>
        {/* Background */}
        <div className="position-absolute top-0 end-0 w-50 h-100 bg-position-center bg-repeat-0 bg-size-cover d-none d-xl-block" style={{ backgroundImage: 'url(assets/img/account/signin-bg.jpg)' }} />
      </section>
      {/* Back to top button */}
      <a href="#top" className="btn-scroll-top" data-scroll>
        <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span>
        <i className="btn-scroll-top-icon bx bx-chevron-up" />
      </a>
    </div>

  )
}
