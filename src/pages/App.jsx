import { ButtonStart } from '../components/buttonStart'

function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
      <h1 className="text-3xl font-bold underline mb-10">Hello world! 🪐</h1>
      <ButtonStart text={"Don't clicker"} />
    </div>
  )
}

export default App
