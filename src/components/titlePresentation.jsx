export function TitlePresentation({ title, subtitle }) {
  return (
    <div className="grid justify-items-center mb-8">
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="text-neutral-500 text-center">{subtitle}</p>
    </div>
  )
}
