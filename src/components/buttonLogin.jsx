export function ButtonLogin({ text }) {
  return (
    <div>
      <button className="bg-gradient-to-b from-button-blue to-button-purple hover:from-button-green hover:to-button-sky text-white py-1 px-6 rounded-full">
        {text}
      </button>
    </div>
  )
}
