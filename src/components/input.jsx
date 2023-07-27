export default function input(props) {
  return (
    <section className="flex flex-col m-auto mb-4 lg:w-4/5">
      <label htmlFor={props.name} className="flex flex-col text-neutral-400">
        {props.span}
        <input
          className="h-10 rounded-lg p-2 text-black"
          type={props.type}
          name={props.name}
          placeholder={props.plholder}
          required
        />
      </label>
    </section>
  )
}
