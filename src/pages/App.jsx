import { ButtonLogin } from '../components/buttonLogin'
import { Navbar } from '../components/navbar'

function App() {
  return (
    <div className="h-screen bg-black text-white">
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold underline mb-10">Hello world! 🪐</h1>
        <h2 className="text-2xl font-bold mb-10">Welcome to our blog!</h2>
        <ButtonLogin text={"Don't click here"} />
      </div>
    </div>
  )
}

export default App
