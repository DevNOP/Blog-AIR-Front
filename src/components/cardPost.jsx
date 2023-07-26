export function CardPost({ image, title, qntComments, data, idCard, tags }) {
  return (
    <div

      className="h-96 w-80 bg-gradient-to-b from-black to-blue-gradient-card rounded-lg  cursor-pointer scale-125 mb-14"
      onClick={() => {
        console.log(idCard)
      }}
    >
      <img className="w-96 h-44 object-cover rounded-lg" src={image} alt="" />

      <div className="p-8">
        <div className=" flex flex-wrap mb-3">
          {tags.map((tag) => (
            <p
              key={tag}
              className="text-white text-xs font-sans font-normal bg-blue-500 rounded-full px-2 mr-2 mb-2"
            >
              {tag}
            </p>
          ))}
        </div>
        <div className="line-clamp-2 mt-4">
          <h1 className=" text-white text-xl font-sans font-normal ">
            {title}
          </h1>
        </div>
        <div className="flex text-white/40 justify-between text-sm mt-10">
          <p>{qntComments} Comentários</p>
          <p>{data}</p>
        </div>
      </div>
    </div>
  )
}
