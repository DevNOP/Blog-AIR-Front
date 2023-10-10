export function ButtonRespond({ text }) {
  return (
    <div>
      <button
        className="py-2 bg-transparent text-gray-200 rounded-2xl font-semibold border-gray-200 hover:bg-gray-200 hover:text-black duration-300
      xl:px-5 xl:text-lg xl:border-2 
      md:px-4 md:text-base md:border-2
      sm:px-3 sm:text-sm sm:border"
      >
        {text}
      </button>
    </div>
  )
}
