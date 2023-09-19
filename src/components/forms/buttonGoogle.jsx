import googleIcon from '../../assets/icons/google.png'

export function ButtonGoogle({ google }) {
  return (
    <button className="flex items-center justify-center gap-4 bg-white text-black my-4 h-10 rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
      <img src={googleIcon} alt="ícone do google" className="h-6 w-6" />
      {google}
    </button>
  )
}
