import { useNavigate } from 'react-router-dom'

export function Logo() {
  const navigate = useNavigate()
  return (
    <a
      onClick={() => {
        navigate('/home')
      }}
    >
      <p className="pb-10 text-lg font-bold transition ease-in-out hover:-translate-y-1 duration-300 hover:scale-105 text-gray-100">
        SpiderLinkers
      </p>
    </a>
  )
}
