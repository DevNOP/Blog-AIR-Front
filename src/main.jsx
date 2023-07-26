import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/error-page'
import { Home } from './pages/Home'
import { Content } from './pages/content'


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
        element: <App />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
