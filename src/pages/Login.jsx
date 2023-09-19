import { Logo } from '../components/layout/logo'
import { Input } from '../components/forms/input'
import { ButtonLogReg } from '../components/forms/buttonLogReg'
import { SideImage } from '../components/layout/sideImage'
import { ButtonGoogle } from '../components/forms/buttonGoogle'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const handleButtonClick = (path) => {
    navigate(path)
  }

  return (
    <div className="grid grid-cols-2 h-screen w-screen bg-bg-lr">
      <section className="bg-stone-900 text-white p-8">
        <Logo />
        <div className="grid justify-items-center mb-8">
          <h1 className="font-bold text-2xl">Seja bem-vindo de volta!</h1>
          <p className="text-xl text-neutral-500 text-center w-60 mt-5">
            Por favor entre com as suas informações de login
          </p>
        </div>

        <Input
          name="email"
          span="Email"
          type="email"
          placeholder="@gmail.com"
        />

        <Input name="pass" span="Senha" type="password" />

        <div className="flex gap-36  justify-center items-center">
          <div className="flex">
            <input type="checkbox" name="" id="" />
            <p>Lembre de mim</p>
          </div>

          <p
            onClick={() => handleButtonClick('/reset-password')}
            className="hover:cursor-pointer text-neutral-500 underline"
          >
            Esqueci a senha
          </p>
        </div>

        <div className="flex flex-col m-auto w-96">
          <ButtonLogReg
            styleButton="text-black mt-4  h-10 rounded-lg bg-gradient-to-r from-bt-log-1 to-bt-lr-2 hover:bg-gradient-to-r hover:from-bt-log-h-1 hover:to-bt-log-h-2 hover:text-bt-text-log-h transition ease-in-out hover:-translate-y-1 duration-300 hover:scale-110"
            button="Login"
          />
          <hr className="mt-5" />
          <ButtonGoogle google="Continuar com o Google" />
        </div>

        <div className="flex flex-col items-center">
          <p>
            Não tem uma conta?
            <a onClick={() => handleButtonClick('/register')}>
              <span className="text-neutral-500 underline ml-1 hover:text-neutral-300 cursor-pointer">
                Registre-se
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
