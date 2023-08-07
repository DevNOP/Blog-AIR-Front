import { ButtonLogReg } from '../../components/forms/buttonLogReg'

export default {
  title: 'Components/Forms/Buttons',
  component: ButtonLogReg,
  parameters: {
    layout: 'centered',
  },
}

export const Login = {
  args: {
    styleButton:
      'text-black my-4 h-10 w-32 rounded-lg bg-gradient-to-r from-bt-log-1 to-bt-lr-2 hover:bg-gradient-to-r hover:from-bt-log-h-1 hover:to-bt-log-h-2 hover:text-bt-text-log-h transition ease-in-out hover:-translate-y-1 duration-300 hover:scale-110',
    button: 'Login',
  },
}
export const Registrar = {
  args: {
    styleButton:
      'text-black my-4 h-10 w-32 rounded-lg bg-gradient-to-r from-bt-reg-1 to-bt-lr-2 hover:bg-gradient-to-r hover:from-bt-reg-h-1 hover:to-bt-reg-h-2 transition ease-in-out hover:-translate-y-1 duration-300 hover:scale-110',
    button: 'Registrar',
  },
}
