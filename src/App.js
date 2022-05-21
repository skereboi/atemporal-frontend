/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { DevTool } from 'little-state-machine-devtools'
import { AuthGuard } from './components/Auth/AuthGuard'
import { AuthProvider } from './context/auth.context'
import { GeneralProvider } from './context/general.context'
import { AccountDetail } from './pages/Account/AccountDetail'
import { AccountEvents } from './pages/Account/AccountEvents'
import { AccountLayout } from './pages/Account/AccountLayout'
import { AccountPayment } from './pages/Account/AccountPayments'
import { ChangePasswordPage } from './pages/ChangePassword'
import { DashboardHomePage } from './pages/Dashboard/Home'
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
import { EventLayout } from './pages/Events/EventLayout'
import { InformationEvent } from './pages/Events/CreateEvent/InformationEvent'
import { StateMachineProvider, createStore } from 'little-state-machine'
import { InformationOrganizer } from './pages/Events/CreateEvent/InformationOrganizer'
import { InformationTickets } from './pages/Events/CreateEvent/InformationTickets'
import { InformationSummary } from './pages/Events/CreateEvent/InformationSummary'
import { ContentLayoutPage } from './pages/Dashboard/ContentLayoutDashboard'
import { initialStates } from './hooks/useLittleMachine'
import { ButtonTest } from './pages/ButtonTest'
import { CreateUsers } from './pages/Dashboard/Users/CreateAdmin'
import { ListCategories } from './pages/Dashboard/Categories/ListCategories'
import { ListUsers } from './pages/Dashboard/Users/ListUsers'
import { EditUsers } from './pages/Dashboard/Users/EditUser'
import { EditCategory } from './pages/Dashboard/Categories/EditCategory'
import { AproveEvents } from './pages/Dashboard/Events/AproveEvents'
import { CreateCategories } from './pages/Dashboard/Categories/CreateAdmin'
import { AccountPublications } from './pages/Account/AccountPublications'
import { ListEventsAproved } from './pages/Dashboard/Events/ListEventsAproved'

initAxiosInterceptors()
createStore({
  createEvent: initialStates.createEvent
})

// eslint-disable-next-line react/display-name
export default () => (
  <GeneralProvider>
    <AuthProvider>
      <StateMachineProvider>
        {process.env.NODE_ENV !== 'production' && <DevTool />}
        <App/>
      </StateMachineProvider>
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
            <Route path='buttontest' element={<ButtonTest />} />
            {/* Private routes general user */}
            <Route element={<AuthGuard typeUser='general' />}>
              <Route path="crear-evento" element={<EventLayout />}>
                <Route index element={<InformationOrganizer />} />
                <Route path='informacion-evento' element={<InformationEvent />} />
                <Route path='informacion-boletos' element={<InformationTickets />} />
                <Route path='resumen' element={<InformationSummary />} />
              </Route>
              <Route path="mis-eventos" element={<AccountLayout />}>
                <Route index element={<AccountDetail/>}/>
                <Route path="actualizar-evento" element={<UpdateEventPage />} />
              </Route>
              <Route path="mi-cuenta" element={<AccountLayout />}>
                <Route index element={<AccountDetail/>}/>
                <Route path='cambiar-password' element={<AccountPassword/>}/>
                <Route path='metodos-pago' element={<AccountPayment/>}/>
                <Route path='eventos' element={<AccountEvents />} />
                <Route path='publicaciones' element={<AccountPublications />} />
              </Route>
            </Route>
            {/* Private routes admin */}
            <Route path='dashboard' element={<AuthGuard typeUser='admin' />}>
              <Route element={<ContentLayoutPage/>}>
                <Route index element={<DashboardHomePage />} />
                <Route path='aprobar'>
                  <Route index element={<AproveEvents />} />
                  <Route path="eventos/:idEvento" element={<EventDetail />} />
                </Route>
                <Route path='eventos' element={<ListEventsAproved />} />
                <Route path="actualizar-evento" element={<UpdateEventPage />} />
                <Route path='usuarios'>
                  <Route index element={<ListUsers />} />
                  <Route path="crear" element={<CreateUsers />} />
                  <Route path="editar/:id" element={<EditUsers />} />
                </Route>
                <Route path='categorias'>
                  <Route index element={<ListCategories />} />
                  <Route path="crear" element={<CreateCategories />} />
                  <Route path="editar/:id" element={<EditCategory />} />
                </Route>
              </Route>
              <Route path="mi-cuenta" element={<AccountLayout />}>
                <Route index element={<AccountDetail />} />
                <Route path='cambiar-password' element={<AccountPassword />} />
              </Route>
            </Route>
          </Route>
          <Route path='recurso-no-encontrado' element={<NotFoundPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
