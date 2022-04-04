/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RequireAuth } from './components/Auth/RequireAuth'
import { AuthProvider } from './context/auth.context'
import { DashboardHomePage } from './pages/Dashboard/Home'
import { CreateEventPage } from './pages/Events/CreateEvent'
import { GetAllEventsPage } from './pages/Events/GetAllEvents'
import { UpdateEventPage } from './pages/Events/UpdateEvent'
import { Layout } from './pages/Layout'
import { LoginPage } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { ProfilePage } from './pages/Profile'
import { RegisterPage } from './pages/Register'

export const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<GetAllEventsPage/>} />
            <Route path="crear-evento" element={<CreateEventPage />} />
            <Route path="actualizar-evento" element={<UpdateEventPage />} />
            <Route path="mi-perfil" element={<ProfilePage />} />
            <Route
              path="dashboard"
              element={
                <RequireAuth>
                  <DashboardHomePage />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="iniciar-sesion" element={<LoginPage />} />
          <Route path="registrarse" element={<RegisterPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </>
  )
}
