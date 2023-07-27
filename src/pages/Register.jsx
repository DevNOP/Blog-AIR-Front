import { Logo } from '../components/logo'
import { TitlePresentation } from '../components/titlePresentation'
import { Input } from '../components/input'
import { Buttons } from '../components/buttons'
import { Loop } from '../components/loop'
import { SideImage } from '../components/sideImage'

export default function Register() {
  return (
    <div className="grid grid-cols-2 h-screen w-screen bg-bg-lr">
      <section className="left bg-stone-900 text-white p-8">
        <Logo />
        <TitlePresentation title="Crie a sua conta!" />

        <Input name="name" span="Nome" type="text" />
        <Input
          name="email"
          span="Email"
          type="email"
          placeholder="@gmail.com"
        />
        <Input name="pass" span="Senha" type="password" />

        <Buttons
          styleButton="text-black my-4 h-10 rounded-lg bg-gradient-to-r from-bt-reg-1 to-bt-lr-2 hover:bg-gradient-to-r hover:from-bt-reg-h-1 hover:to-bt-reg-h-2 transition ease-in-out hover:-translate-y-1 duration-300 hover:scale-110"
          button="Registrar"
          google="Inscreva-se com o Google"
        />

        <Loop account="Já tenho uma conta." loop="Login" url="/login" />
      </section>

      <section>
        <SideImage />
      </section>
    </div>
  )
}
