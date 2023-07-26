export function RadioButton({ option, set }) {
  return (
    <div>
      <input
        className="hidden peer"
        type="radio"
        name="options"
        value={option}
        id={option}
        onChange={set}
      />
      <label
        htmlFor={option}
        className="text-white text-xl inline-flex items-center justify-center h-10 w-56 p-5 rounded-lg cursor-pointer bg-blue-dark border-4 border-blue-dark peer-checked:border-green-600 "
      >
        {option}
      </label>
    </div>
  )
}
