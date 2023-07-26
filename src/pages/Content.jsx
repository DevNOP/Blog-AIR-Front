import { Navbar } from '../components/navbar'
import { Outlet } from 'react-router-dom'

export function Content() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}
