export function ButtonRespond({ text }) {
  return (
    <div>
      <button className="px-5 py-2 bg-transparent text-gray-200 rounded-2xl font-semibold text-lg border-2 border-gray-200 hover:bg-gray-200 hover:text-black duration-300">
        {text}
      </button>
    </div>
  )
}
