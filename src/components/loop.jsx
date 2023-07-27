export default function Loop({ account, url, loop }) {
  return (
    <div className="flex flex-col items-center">
      <p>
        {account}
        <a href={url}>
          <span className="text-neutral-500 underline ml-1 hover:text-neutral-300">
            {loop}
          </span>
        </a>
      </p>
    </div>
  )
}
