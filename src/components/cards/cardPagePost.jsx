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
      className="relative w-full max-h-card-height cursor-pointer bg-[image:var(--image-url)] backdrop-blur-sm bg-center bg-cover 
      xl:p-20"
    >
      <div className="flex justify-between">
        <div
          className="flex items-center gap-3 text-white 
        xl:p-0 
        sm:p-5"
        >
          <img
            className="rounded-full border-2 border-white 
            xl:w-12 
            md:w-12
            sm:w-10"
            src={imgAuthor}
            alt={author}
          />
          <h2
            className="hover:underline cursor-pointer 
          md:text-lg 
          sm:text-base"
          >
            {author}
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-10 items-center">
        <h1
          className="text-white font-medium 
        xl:text-4xl xl:w-card-text-width 
        md:text-3xl md:w-card-text-width 
        sm:text-xl sm:w-80"
        >
          {title}
        </h1>
      </div>

      <div
        className="flex justify-between 
      xl:mt-24 xl:p-0 
      sm:p-3 sm:mt-16"
      >
        <div className="flex">
          {tags &&
            tags.map((tag) => (
              <p
                key={tag}
                className="text-white font-sans font-normal bg-blue-500 rounded-full px-2 mr-2 mb-2 
                xl:text-base 
                md:text-base 
                sm:text-xs"
              >
                {tag}
              </p>
            ))}
        </div>
        <div className="">
          <p
            className="text-white/40 
          xl:text-base
          md:text-base 
          sm:text-xs"
          >
            {date}
          </p>
        </div>
      </div>
    </div>
  )
}
