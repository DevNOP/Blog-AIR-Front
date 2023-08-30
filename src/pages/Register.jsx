import { Logo } from '../components/layout/logo'
import { Input } from '../components/forms/input'
import { ButtonLogReg } from '../components/forms/buttonLogReg'
import { SideImage } from '../components/layout/sideImage'
import { ButtonGoogle } from '../components/forms/buttonGoogle'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate('/login')
  }
  return (
    <div className="grid grid-cols-2 h-screen w-screen bg-bg-lr">
      <section className="left bg-stone-900 text-white p-8">
        <Logo />
        <div className="grid justify-items-center mb-8">
          <h1 className="font-bold text-xl">Crie a sua conta!</h1>
        </div>

        <Input name="name" span="Nome" type="text" />
        <Input
          name="email"
          span="Email"
          type="email"
          placeholder="@gmail.com"
        />
        <Input name="pass" span="Senha" type="password" />

        <div className="flex flex-col m-auto lg:w-96">
          <ButtonLogReg
            styleButton="text-black my-4 h-10 rounded-lg bg-gradient-to-r from-bt-reg-1 to-bt-lr-2 hover:bg-gradient-to-r hover:from-bt-reg-h-1 hover:to-bt-reg-h-2 transition ease-in-out hover:-translate-y-1 duration-300 hover:scale-110"
            button="Registrar"
          />
          <ButtonGoogle google="Inscreva-se com o Google" />
        </div>

        <div className="flex flex-col items-center">
          <p>
            Já tenho uma conta.
            <a onClick={handleButtonClick}>
              <span className="text-neutral-500 underline ml-1 hover:text-neutral-300 cursor-pointer">
                Login
              </span>
            </a>
          </p>
        </div>
      </section>

      <section>
        <SideImage />
      </section>
    </div>
  )
}
