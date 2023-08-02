export function CardPagePost({
  author,
  imgAuthor,
  title,
  date,
  tags,
  imgCard,
  idCard,
}) {
  return (
    <div
      onClick={() => {
        console.log(idCard)
      }}
      style={{ '--image-url': `url(${imgCard})` }}
      className="relative  w-full max-h-card-height cursor-pointer bg-[image:var(--image-url)] backdrop-blur-sm bg-center bg-cover p-20"
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-3 text-white">
          <img
            className="rounded-full w-12 border-2 border-white "
            src={imgAuthor}
            alt={author}
          />
          <h2 className="hover:underline cursor-pointer">{author}</h2>
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-10 items-center">
        <h1 className="text-white text-4xl w-card-text-width">{title}</h1>
      </div>

      <div className="flex justify-between mt-24">
        <div className="flex">
          {tags &&
            tags.map((tag) => (
              <p
                key={tag}
                className="text-white text-base font-sans font-normal bg-blue-500 rounded-full px-2 mr-2 mb-2"
              >
                {tag}
              </p>
            ))}
        </div>
        <div className="">
          <p className="text-white/40">{date}</p>
        </div>
      </div>
    </div>
  )
}
