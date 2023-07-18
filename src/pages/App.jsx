import { ButtonStart } from '../components/buttonStart'

function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
      <h1 className="text-3xl font-bold underline mb-10">Hello world! 🪐</h1>
      <h2 className="text-2xl font-bold mb-10">Welcome to our blog!</h2>
      <ButtonStart text={"Don't clicker here"} />
    </div>
  )
}

export default App
