export default function loop(props) {
  return (
    <div className="flex flex-col items-center">
      <p>
        {props.account}
        <a href={props.url}>
          <span className="text-neutral-500 underline ml-1 hover:text-neutral-300">
            {props.loop}
          </span>
        </a>
      </p>
    </div>
  )
}
