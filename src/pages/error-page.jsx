import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
      <h1 className="text-3xl font-semibold mb-5">Oops!</h1>
      <div>
        <h1 className="text-3xl font-semibold mb-5">404</h1>
      </div>

      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
