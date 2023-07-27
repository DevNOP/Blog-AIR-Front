export default function Input({ name, span, type, plholder }) {
  return (
    <section className="flex flex-col m-auto mb-4 lg:w-4/5">
      <label htmlFor={name} className="flex flex-col text-neutral-400">
        {span}
        <input
          className="h-10 rounded-lg p-2 text-black"
          type={type}
          name={name}
          placeholder={plholder}
          required
        />
      </label>
    </section>
  )
}
