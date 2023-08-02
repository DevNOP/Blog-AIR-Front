import googleIcon from '../../assets/icons/google.png'

export function Buttons({ styleButton, button, google }) {
  return (
    <div className="flex flex-col m-auto lg:w-4/5">
      <button className={styleButton}>{button}</button>
      <button className="flex items-center justify-center gap-4 bg-white text-black my-4 h-10 rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        <img src={googleIcon} alt="ícone do google" className="h-6 w-6" />
        {google}
      </button>
    </div>
  )
}
