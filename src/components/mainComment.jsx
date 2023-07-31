export function MainComment({ author, date, text, imgPerfil, like }) {
  return (
    <div className="px-52">
      <div className="bg-main-comment flex justify-between rounded-t-lg">
        <div className="flex p-5">
          <img
            className="w-12 rounded-full border-2 cursor-pointer"
            src={imgPerfil}
            alt={author}
          />
          <div className="px-3">
            <h5 className="text-gray-100 font-medium  hover:underline cursor-pointer">
              {author}
            </h5>
            <p className="text-white/40">{date}</p>
          </div>
        </div>
        <div className="flex p-5">
          <p className="text-gray-200 text-2xl pr-1 mt-1">{like}</p>
          <button className="text-gray-200 text-4xl cursor-pointer">
            <ion-icon name="heart-outline"></ion-icon>
          </button>
        </div>
      </div>
      <div className="bg-main-comment text-gray-100 px-20 pb-5 rounded-b-lg">
        <p className="mb-4">{text}</p>
        <img src="../src/assets/images/code.PNG" alt="code image" />
      </div>
    </div>
  )
}
