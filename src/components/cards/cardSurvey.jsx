import { RadioButton } from '../forms/radioButton'
import { useState } from 'react'

export function CardSurvey({ question, options }) {
  const [value, setValue] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)

  const onOptionChange = (e) => {
    setValue(e.target.value)
    setIsDisabled(false)
  }

  return (
    <div
      className="h-96 
      lg:w-80 
      lg:inline-block 

      md:mr-5 
      
      sm:w-80 
      sm:flex 
      sm:flex-col 
      sm:items-center 
      
      bg-gradient-to-b from-black to-blue-gradient-card rounded-lg text-center p-7"
    >
      <h1 className="font-sans font-normal text-white text-2xl">{question}</h1>
      <ul>
        {options &&
          options.map((option) => {
            return (
              <li key={option} className="mt-5">
                <RadioButton set={onOptionChange} option={option} />
              </li>
            )
          })}
      </ul>
      <button
        disabled={isDisabled}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 w-32 disabled:bg-gray-600 disabled:text-black disabled:cursor-not-allowed"
        onClick={() => {
          console.log(value)
        }}
      >
        Enviar
      </button>
    </div>
  )
}
