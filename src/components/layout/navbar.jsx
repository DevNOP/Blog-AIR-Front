import { useNavigate } from 'react-router-dom'
import { ButtonLogin } from '../forms/buttonLogin'
import React, { useState } from 'react'

export function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  function Menu() {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <nav
      className="bg-primary p-3 text-gray-100 
      md:flex md:justify-around md:items-center"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold ">SpiderLinkers</h1>
        <span
          className="text-3xl cursor-pointer 
          md:hidden block"
          onClick={Menu}
        >
          {isMenuOpen ? (
            <ion-icon name="close-outline"></ion-icon>
          ) : (
            <ion-icon name="menu-outline"></ion-icon>
          )}
        </span>
      </div>

      <ul
        className={`md:flex ${
          isMenuOpen ? 'top-[60px] opacity-100' : '-z-1 opacity-0 top-[-400px]'
        } absolute bg-primary w-full left-0 py-4 pl-7 transition-all ease-in duration-500
          md:z-auto md:static md:w-auto md:py-0 md:pl-0 md:opacity-100
          sm:z-10`}
      >
        <li
          onClick={() => {
            navigate('/home')
          }}
          className="cursor-pointer mr-4 my-6 text-xl hover:text-button-blue duration-500 md:my-0 "
        >
          Home
        </li>
        <li className="mr-4 my-6 text-xl hover:text-button-blue duration-500 md:my-0">
          Sobre nós
        </li>
        <li className="mr-4 my-6 text-xl hover:text-button-blue duration-500 md:my-0">
          Contato
        </li>
        <li className="lg:hidden sm:inline-block">
          <ButtonLogin text={'Login'} />
        </li>
      </ul>
      <div className="lg:inline-block sm:hidden">
        <ButtonLogin text={'Login'} />
      </div>
    </nav>
  )
}
