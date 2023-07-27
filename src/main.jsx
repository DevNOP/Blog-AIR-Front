// React Elements
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Páginas
import App from './pages/App'
import Login from './pages/Login'
import Register from './pages/Register'
import ErrorPage from './pages/error-page'
import { Home } from './pages/Home'
import { Content } from './pages/Content'

// CSS
import './index.css'

// Para adicionar uma nova página crie mais um objeto dentro do array
// https://reactrouter.com/en/main/start/tutorial -> documentação do react-router-dom
const router = createBrowserRouter([
  {
    path: '/',
    element: <Content />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
