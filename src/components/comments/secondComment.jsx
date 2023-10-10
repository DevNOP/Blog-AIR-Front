import { ButtonRespond } from '../forms/buttonRespond'

export function SecondComment({
  author,
  date,
  text,
  imgPerfil,
  like,
  comment,
}) {
  return (
    <div className="">
      <div className="flex justify-between rounded-lg">
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
              className="text-gray-100 font-medium hover:underline cursor-pointer 
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
            className="text-red-600 cursor-pointer 
          xl:text-4xl 
          md:text-3xl  
          sm:text-2xl sm:mt-0.5"
          >
            <ion-icon name="heart"></ion-icon>
          </button>
        </div>
      </div>
      <div
        className="text-gray-100 
      xl:px-20 
      sm:px-6 pb-5"
      >
        <p
          className="mb-4 
        md:text-base 
        sm:text-sm"
        >
          {text}
        </p>
        <div>
          <img src="../src/assets/images/code.PNG" alt="code image" />
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div
          className="flex 
        xl:ml-16 
        sm:ml-5"
        >
          <ButtonRespond text={'Responder'} />
          <button
            className="flex text-gray-200 ml-2 p-2 cursor-pointer 
          xl:text-4xl
          md:text-3xl 
          sm:text-2xl"
          >
            <ion-icon name="chatbox-ellipses-outline"></ion-icon>
            <p
              className="ml-1 
            md:text-2xl 
            sm:text-lg sm:-mt-1"
            >
              {comment}
            </p>
          </button>
        </div>
        <button
          className="text-orange-500 cursor-pointer 
        xl:text-4xl 
        md:text-3xl
        sm:pr-5 sm:text-2xl"
        >
          <ion-icon name="warning"></ion-icon>
        </button>
      </div>
      <hr className="mt-5"></hr>
    </div>
  )
}
