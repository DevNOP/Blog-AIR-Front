import { ButtonRespond } from './buttonRespond'

export function SecondComment({
  author,
  date,
  text,
  imgPerfil,
  like,
  comment,
}) {
  return (
    <div className="px-52">
      <div className="flex justify-between rounded-lg">
        <div className="flex p-5">
          <img
            className="w-12 rounded-full border-2 cursor-pointer"
            src={imgPerfil}
            alt={author}
          />
          <div className="px-3">
            <h5 className="text-gray-100 font-medium hover:underline cursor-pointer">
              {author}
            </h5>
            <p className="text-white/40">{date}</p>
          </div>
        </div>
        <div className="flex p-5">
          <p className="text-gray-200 text-2xl pr-1 mt-1">{like}</p>
          <button className="text-red-600 text-4xl cursor-pointer">
            <ion-icon name="heart"></ion-icon>
          </button>
        </div>
      </div>
      <div className="text-gray-100 px-20 pb-5">
        <p className="mb-4">{text}</p>
        <img src="../src/assets/images/code.PNG" alt="code image" />
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex ml-16">
          <ButtonRespond text={'Responder'} />
          <button className="flex text-4xl text-gray-200 ml-2 p-2 cursor-pointer">
            <ion-icon name="chatbox-ellipses-outline"></ion-icon>
            <p className="text-2xl ml-1">{comment}</p>
          </button>
        </div>
        <button className="text-4xl text-orange-500 cursor-pointer">
          <ion-icon name="warning"></ion-icon>
        </button>
      </div>
      <hr className="mt-5"></hr>
    </div>
  )
}
