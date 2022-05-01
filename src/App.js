/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { AuthGuard } from './components/Auth/AuthGuard'
import { AuthProvider } from './context/auth.context'
import { GeneralProvider } from './context/general.context'
import { useAuth } from './hooks/useAuth'
import { ChangePasswordPage } from './pages/ChangePassword'
import { DashboardHomePage } from './pages/Dashboard/Home'
import { CreateEventPage } from './pages/Events/CreateEvent'
import { GetAllEventsPage } from './pages/Events/GetAllEvents'
import { GetOneEventPage } from './pages/Events/GetOneEvent'
import { UpdateEventPage } from './pages/Events/UpdateEvent'
import { Home } from './pages/Home'
import { Layout } from './pages/Layout'
import { LoginPage } from './pages/Login'
import { NotFoundPage } from './pages/NotFound'
import { NoticePrivacyPage } from './pages/NoticePrivacy'
import { ProfilePage } from './pages/Profile'
import { RecoverPasswordPage } from './pages/RecoverPassword'
import { RegisterPage } from './pages/Register'
import { TermsConditionsPage } from './pages/TermsConditions'
import { initAxiosInterceptors } from './services/auth.service'

initAxiosInterceptors()

// eslint-disable-next-line react/display-name
export default () => (
  <GeneralProvider>
    <AuthProvider>
      <App/>
    </AuthProvider>
  </GeneralProvider>
)

const App = () => {
  const { user } = useAuth()
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          {/* Public routes */}
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='aviso-privacidad' element={<NoticePrivacyPage />} />
            <Route path='terminos-condiciones' element={<TermsConditionsPage />} />
            <Route path='iniciar-sesion' element={<LoginPage />} />
            <Route path="registrarse" element={<RegisterPage />} />
            <Route path="recuperar-password" element={<RecoverPasswordPage />} />
            <Route path="cambiar-password/:idCode" element={<ChangePasswordPage />} />
            <Route path='eventos' element={<GetAllEventsPage />} />
            <Route path='eventos/:idEvento' element={<GetOneEventPage />} />
            {/* Private routes general user */}
            <Route element={<AuthGuard typeUser='general' />}>
              <Route path="crear-evento" element={<CreateEventPage />} />
              <Route path="actualizar-evento" element={<UpdateEventPage />} />
              <Route path="mi-perfil" element={<ProfilePage />} />
            </Route>
            {/* Private routes admin */}
            <Route path='dashboard' element={<AuthGuard typeUser='admin' />}>
              <Route index element={<DashboardHomePage />} />
              <Route path='eventos' element={<GetAllEventsPage />} />
              <Route path="crear-evento" element={<CreateEventPage />} />
              <Route path="actualizar-evento" element={<UpdateEventPage />} />
              <Route path="mi-perfil" element={<ProfilePage />} />
            </Route>
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
