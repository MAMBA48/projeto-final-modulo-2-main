import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import ErrorPage from './pages/errorPage'
import Dashboard from './pages/dashboard'
import GlobalStyles from './assets/styles/global-styles'
import * as ReactDOM from 'react-dom/client'
import * as React from 'react'
import PlansPage from './pages/plansPage'
import NotificationsPage from './pages/notificationsPage'
import FaqPage from './pages/faqPage'
import RegistedUsersPage from './pages/registeredUsers'
import UserPage from './pages/userPage'
import SpecialtiesPage from './pages/specialtiesPage'
import NewSpecialtiesPage from './pages/newSpecialties'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <LoginPage /> },
      { path: 'userpage', element: <UserPage /> },
      { path: 'registers', element: <RegisterPage /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'plans', element: <PlansPage /> },
      { path: 'notifications', element: <NotificationsPage /> },
      { path: 'specialties', element: <SpecialtiesPage /> },
      { path: 'specialties/:id', element: <SpecialtiesPage /> },
      { path: 'newspeciality', element: <NewSpecialtiesPage /> },
      { path: 'faq', element: <FaqPage /> },
      { path: 'registeredusers', element: <RegistedUsersPage /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyles />
  </React.StrictMode>
)
