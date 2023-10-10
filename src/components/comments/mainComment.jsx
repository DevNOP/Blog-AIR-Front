export function MainComment({ author, date, text, imgPerfil, like }) {
  return (
    <div className="">
      <div className="bg-main-comment flex justify-between rounded-t-lg">
        <div className="flex p-5">
          <img
            className="rounded-full border-2 cursor-pointer 
            md:w-12 
            sm:w-10"
            src={imgPerfil}
            alt={author}
          />
          <div className="px-3">
            <h5
              className="text-gray-100 font-medium  hover:underline cursor-pointer 
            md:text-base 
            sm:text-sm"
            >
              {author}
            </h5>
            <p
              className="text-white/40 
            md:text-base 
            sm:text-sm"
            >
              {date}
            </p>
          </div>
        </div>
        <div className="flex p-5">
          <p
            className="text-gray-200 pr-1 mt-1 
          md:text-2xl 
          sm:text-lg"
          >
            {like}
          </p>
          <button
            className="text-gray-200 cursor-pointer
          xl:text-4xl 
          md:text-3xl 
          sm:text-2xl sm:mt-0.5"
          >
            <ion-icon name="heart-outline"></ion-icon>
          </button>
        </div>
      </div>
      <div
        className="bg-main-comment text-gray-100 pb-5 rounded-b-lg
      xl:px-20 
      sm:px-6"
      >
        <p
          className="mb-4 
        md:text-base 
        sm:text-sm"
        >
          {text}
        </p>
        <div>
          <img
            src="../src/assets/images/code.PNG"
            alt="code image"
            className=""
          />
        </div>
      </div>
    </div>
  )
}
