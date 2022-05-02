/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { AuthGuard } from './components/Auth/AuthGuard'
import { AuthProvider } from './context/auth.context'
import { GeneralProvider } from './context/general.context'
import { AccountDetail } from './pages/Account/AccountDetail'
import { AccountEvents } from './pages/Account/AccountEvents'
import { AccountLayout } from './pages/Account/AccountLayout'
import { AccountPayment } from './pages/Account/AccountPayments'
import { ChangePasswordPage } from './pages/ChangePassword'
import { DashboardHomePage } from './pages/Dashboard/Home'
import { CreateEventPage } from './pages/Events/CreateEvent'
import { EventDiscoverPage } from './pages/Events/EventDiscover'
import { EventDetail } from './pages/Events/EventDetail'
import { UpdateEventPage } from './pages/Events/UpdateEvent'
import { Home } from './pages/Home'
import { Layout } from './pages/Layout'
import { LoginPage } from './pages/Login'
import { NotFoundPage } from './pages/NotFound'
import { NoticePrivacyPage } from './pages/NoticePrivacy'
import { RecoverPasswordPage } from './pages/RecoverPassword'
import { RegisterPage } from './pages/Register'
import { TermsConditionsPage } from './pages/TermsConditions'
import { initAxiosInterceptors } from './services/auth.service'
import { AccountPassword } from './pages/Account/AccountPassword'

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
            <Route path='eventos' element={<EventDiscoverPage />} />
            <Route path='eventos/:idEvento' element={<EventDetail />} />
            {/* Private routes general user */}
            <Route element={<AuthGuard typeUser='general' />}>
              <Route path="crear-evento" element={<CreateEventPage />} />
              <Route path="actualizar-evento" element={<UpdateEventPage />} />
              <Route path="mi-cuenta" element={<AccountLayout />}>
                <Route index element={<AccountDetail/>}/>
                <Route path='cambiar-password' element={<AccountPassword/>}/>
                <Route path='metodos-pago' element={<AccountPayment/>}/>
                <Route path='eventos' element={<AccountEvents/>}/>
              </Route>
            </Route>
            {/* Private routes admin */}
            <Route path='dashboard' element={<AuthGuard typeUser='admin' />}>
              <Route index element={<DashboardHomePage />} />
              <Route path='eventos' element={<EventDiscoverPage />} />
              <Route path="crear-evento" element={<CreateEventPage />} />
              <Route path="actualizar-evento" element={<UpdateEventPage />} />
            </Route>
          </Route>
          <Route path='recurso-no-encontrado' element={<NotFoundPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
