export default function titleApresentation(props) {
  return (
    <div className="grid justify-items-center mb-8">
      <h1 className="font-bold text-xl">{props.title}</h1>
      <p className="text-neutral-500 text-center">{props.subtitle}</p>
    </div>
  )
}
