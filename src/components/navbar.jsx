import { ButtonLogin } from './buttonLogin'
import React, { useState } from 'react'

export function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false)

  function Menu() {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="md:flex md:justify-around md:items-center bg-primary p-3 text-gray-100">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold ">SpiderLinkers</h1>
        <span
          className="text-3xl cursor-pointer md:hidden block"
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
        } md:z-auto md:static absolute bg-primary w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 transition-all ease-in duration-500`}
      >
        <li className="mr-4 my-6 md:my-0 text-xl hover:text-button-blue duration-500">
          Home
        </li>
        <li className="mr-4 my-6 md:my-0 text-xl hover:text-button-blue duration-500">
          Sobre nós
        </li>
        <li className="mr-4 my-6 md:my-0 text-xl hover:text-button-blue duration-500">
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
