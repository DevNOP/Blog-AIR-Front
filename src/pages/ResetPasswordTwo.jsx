import SpiderLinkerLogo from '../assets/images/IconSpiderLinkersWithBackground.png'
import KeyOutline from '../assets/images/AiOutlineKey.png'
import { Input } from '../components/forms/input'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ResetPasswordTwo() {
  const [status, setStatus] = useState(false)
  const navigate = useNavigate()

  const changeStatus = () => {
    setStatus(true)
  }

  const handleButtonClick = () => {
    navigate('/login')
  }

  return (
    <div className="bg-background-page-dark h-screen p-5">
      <div className="w-32">
        <img src={SpiderLinkerLogo} alt="" />
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <div className="w-24 mb-10">
            <img src={KeyOutline} alt="" />
          </div>
          <div className="flex flex-col items-center mb-10">
            <h2 className="mb-5 text-2xl text-white">
              Por favor, coloque a nova senha !
            </h2>
          </div>
        </div>

        {status ? (
          <div className="flex flex-col items-center mb-10">
            <h2 className="mb-5 text-lg text-white/25 lg:w-72 text-center mt-10">
              Você conseguiu alterar com sucesso a sua senha. Por favor , use a
              nova senha para realizar o seu {''}
              <a
                onClick={handleButtonClick}
                className="hover:cursor-pointer text-blue-600/60"
              >
                login aqui.
              </a>
            </h2>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <Input name="pass" span="Senha" type="password" />
            </div>
            <Input name="pass" span="Confirmar senha" type="password" />

            <button
              onClick={changeStatus}
              className="text-black font-bold w-96 mt-5 h-12 rounded-lg bg-gradient-to-r from-bt-log-1 to-bt-lr-2 hover:bg-gradient-to-r hover:from-bt-log-h-1 hover:to-bt-log-h-2 hover:text-bt-text-log-h transition ease-in-out hover:-translate-y-1 duration-300 hover:scale-110"
            >
              Redefinir a senha
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
