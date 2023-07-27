import { useEffect } from 'react'
import { Navbar } from '../components/navbar'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

export function Content() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home')
    }
  })
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}
