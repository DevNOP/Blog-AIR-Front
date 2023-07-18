import { ButtonStart } from '../components/buttonStart'

function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
      <h1 className="text-3xl font-bold underline mb-10">Hello world Abner</h1>
      <ButtonStart text={"Don't clicker"} />
      <h2>Se clicar é gay.</h2>
    </div>
  )
}

export default App
