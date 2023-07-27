import Logo from '../components/logo'
import TitleApresentation from '../components/titleApresentation'

import Input from '../components/input'
import Buttons from '../components/buttons'
import Loop from '../components/loop'

import SideImage from '../components/sideImage'

export default function Login() {
  return (
    <div className="grid grid-cols-2 h-screen w-screen bg-bg-lr">
      <section className="left bg-stone-900 text-white p-8">
        <Logo />
        <TitleApresentation
          title="Seja bem-vindo de volta!"
          subtitle="Por favor entre com as suas informações de login"
        />

        <Input name="email" span="Email" type="email" plholder="@gmail.com" />
        <Input name="pass" span="Senha" type="password" />

        <Buttons
          cbutton="text-black my-4 h-10 rounded-lg bg-gradient-to-r from-bt-log-1 to-bt-lr-2 hover:bg-gradient-to-r hover:from-bt-log-h-1 hover:to-bt-log-h-2 hover:text-bt-text-log-h transition ease-in-out hover:-translate-y-1 duration-300 hover:scale-110"
          button="Login"
          google="Continuar com o Google"
        />

        <Loop account="Não tem uma conta?" loop="Registre-se" url="/register" />
      </section>

      <section>
        <SideImage />
      </section>
    </div>
  )
}
