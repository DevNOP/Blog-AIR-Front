export function ButtonComment({ text }) {
  return (
    <div>
      <button className="px-8 py-3 bg-gray-100 text-black rounded-lg font-semibold text-lg hover:bg-gray-700 hover:text-gray-100 duration-300 mb-20">
        {text}
      </button>
    </div>
  )
}
