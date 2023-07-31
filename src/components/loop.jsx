import { useNavigate, useLocation } from 'react-router-dom'

export function Loop({ account, loop }) {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div className="flex flex-col items-center">
      <p>
        {account}
        <a
          onClick={() => {
            if (location.pathname === '/login') {
              navigate('/register')
            } else {
              navigate('/login')
            }
          }}
        >
          <span className="text-neutral-500 underline ml-1 hover:text-neutral-300">
            {loop}
          </span>
        </a>
      </p>
    </div>
  )
}
