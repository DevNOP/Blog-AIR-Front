import SpiderLinkerLogo from '../assets/images/IconSpiderLinkersWithBackground.png'
import EmailOutline from '../assets/images/AiOutlineMail.png'

import { Input } from '../components/forms/input'
import { useState } from 'react'

export default function ResetPasswordOne() {
  const [sendEmail, setSendEmail] = useState(false)

  const changeSendEmail = () => {
    setSendEmail(true)
  }
  return (
    <div className="bg-background-page-dark h-screen p-5">
      <div
        className="
        xl:w-32 
        lg:w-32 
        md:w-20 
        sm:w-16
        
        "
      >
        <img src={SpiderLinkerLogo} alt="" />
      </div>

      <div className="flex flex-col items-center">
        <div className="xl:w-24 lg:w-20 sm:w-20 sm:mt-10 mb-10">
          <img src={EmailOutline} alt="" />
        </div>
        <div className="flex flex-col items-center mb-10">
          <h2 className="mb-5 text-2xl text-white">Esqueceu a sua senha ?</h2>
          <p className="text-sm text-center sm: w-80 text-white/20">
            Por favor! coloque o seu email abaixo para você redefinir a sua
            senha.
          </p>
        </div>

        {sendEmail ? (
          <div className="flex flex-col items-center mb-10">
            <h2 className="mb-5 text-lg text-white lg:w-80 text-center mt-10">
              Um email foi enviado para você com os próximos passos ! 🔑
            </h2>
          </div>
        ) : (
          <div>
            <Input
              name="email"
              span="Email"
              type="email"
              placeholder="@gmail.com"
            />

            <button
              onClick={changeSendEmail}
              className="text-black font-bold xl:w-96 sm:w-80 mt-5 h-12 rounded-lg bg-gradient-to-r from-bt-log-1 to-bt-lr-2 hover:bg-gradient-to-r hover:from-bt-log-h-1 hover:to-bt-log-h-2 hover:text-bt-text-log-h transition ease-in-out hover:-translate-y-1 duration-300 hover:scale-110"
            >
              Redefinir a senha
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
