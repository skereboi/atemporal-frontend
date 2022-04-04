import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RequireAuth } from './components/Auth/RequireAuth'
import { DashboardHomePage } from './pages/Dashboard/Home'
import { Layout } from './pages/Layout'
import { LoginPage } from './pages/Login'

function App () {
  return (
    <>
      <Layout>
        <h1>Router</h1>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <DashboardHomePage />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </Layout>
    </>
  )
}

export default App
