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
    <div className="viewport">
      <div className="image image-overlay" style={{ backgroundImage: 'url(../../assets/images/demo/image-2.jpg)' }} />
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-6 col-lg-5">
            <div className="accordion-group accordion-group-portal" data-accordion-group>
              <div className="accordion open" data-accordion>
                <div className="accordion-control" data-control>
                  <h5>Sign In</h5>
                </div>
                <div className="accordion-content" data-content>
                  <div className="accordion-content-wrapper">
                    <form>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput2">Password</label>
                        <input type="password" className="form-control" id="exampleFormControlInput2" />
                      </div>
                      <a href className="btn btn-primary btn-block">Sign In</a>
                    </form>
                  </div>
                </div>
              </div>
              <div className="accordion" data-accordion>
                <div className="accordion-control" data-control>
                  <h5>Create Account</h5>
                </div>
                <div className="accordion-content" data-content>
                  <div className="accordion-content-wrapper">
                    <form>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput3">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput3" placeholder="name@example.com" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput4">Password</label>
                        <input type="password" className="form-control" id="exampleFormControlInput4" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput5">Repeat Password</label>
                        <input type="password" className="form-control" id="exampleFormControlInput5" />
                      </div>
                      <a href className="btn btn-primary btn-block">Sign In</a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
