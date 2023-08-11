import { Logo } from '../components/layout/logo'
import { Input } from '../components/forms/input'
import { ButtonLogReg } from '../components/forms/buttonLogReg'
import { SideImage } from '../components/layout/sideImage'
import { ButtonGoogle } from '../components/forms/buttonGoogle'

export default function Login() {
  return (
    <div className="grid grid-cols-2 h-screen w-screen bg-bg-lr">
      <section className="bg-stone-900 text-white p-8">
        <Logo />
        <div className="grid justify-items-center mb-8">
          <h1 className="font-bold text-xl">Seja bem-vindo de volta!</h1>
          <p className="text-neutral-500 text-center">
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

        <div className="flex flex-col m-auto lg:w-4/5">
          <ButtonLogReg
            styleButton="text-black my-4 h-10 rounded-lg bg-gradient-to-r from-bt-log-1 to-bt-lr-2 hover:bg-gradient-to-r hover:from-bt-log-h-1 hover:to-bt-log-h-2 hover:text-bt-text-log-h transition ease-in-out hover:-translate-y-1 duration-300 hover:scale-110"
            button="Login"
          />
          <ButtonGoogle google="Continuar com o Google" />
        </div>

        <div className="flex flex-col items-center">
          <p>
            Não tem uma conta?
            <a href="/register">
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
