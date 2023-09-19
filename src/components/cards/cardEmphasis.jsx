import { useNavigate } from 'react-router-dom'
import Start from '../../assets/images/Star.png'

export function CardEmphasis({
  author,
  imgAuthor,
  title,
  date,
  tags,
  imgCard,
  idCard,
}) {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    console.log(idCard)
    // navigate(`/page-card/${idCard}`) ESSA E A FORMA CORRETA

    navigate(`/page-card`)
  }
  return (
    <div
      onClick={handleButtonClick}
      style={{ '--image-url': `url(${imgCard})` }}
      className="relative rounded-lg 
      xl:w-card-width 

      lg:w-auto

      md:w-auto 
      md: ml-5

      sm:w-80 

      cursor-pointer bg-[image:var(--image-url)] backdrop-blur-sm bg-center bg-cover p-10 "
    >
      <div
        className="flex 
        xl:flex-row 
        xl:justify-between 

        lg:flex-row 
        lg:justify-between

        md:flex-row
        md:justify-between 

        sm:flex-col 
        sm:items-center 
        sm:gap-5"
      >
        <div className="flex items-center gap-3 text-white">
          <img
            className="rounded-full w-12 border-2 border-white "
            src={imgAuthor}
            alt={author}
          />
          <h2>{author}</h2>
        </div>
        <div className="flex bg-white w-36 justify-center items-center gap-3 rounded-full sm:h-10">
          <div className="">
            <img className="w-6" src={Start} alt="" />
          </div>
          <p>Destaque</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-10">
        <h1
          className="text-white 

          xl:text-4xl 
          xl:text-left 
          xl:w-card-text-width 

          lg:text-4xl 
          lg:text-left 
          lg:w-card-text-width 

          md:text-3xl
          md:text-left
          md:w-auto

          sm:text-3xl "
        >
          {title}
        </h1>
        <p className="text-white/60">{date}</p>
      </div>

      <div className="flex mt-5">
        {tags &&
          tags.map((tag) => (
            <p
              key={tag}
              className="text-white text-xs font-sans font-normal bg-blue-500 rounded-full px-2 mr-2 mb-2"
            >
              {tag}
            </p>
          ))}
      </div>
    </div>
  )
}
