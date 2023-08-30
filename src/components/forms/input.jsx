export function Input({ name, span, type, placeholder }) {
  return (
    <section className="flex flex-col m-auto mb-4 w-96">
      <label htmlFor={name} className="flex flex-col text-neutral-400">
        <div className="flex gap-1">
          {span} <div className="text-blue-500">*</div>
        </div>
        <input
          className="h-11 rounded-lg p-4 text-lg text-black"
          type={type}
          name={name}
          placeholder={placeholder}
          required
        />
      </label>
    </section>
  )
}
