import { CardEmphasis } from '../components/cardEmphasis'
import { CardPost } from '../components/cardPost'
import { CardSurvey } from '../components/cardSurvey'

const mock = {
  author: 'SpiderLinkers',
  imgAuthor:
    'https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg',
  title: 'Porque todo desenvolvedor tem sonho de ter um MacBook ?!',
  date: '04 jun 2020',
  imgCard:
    'https://wallpapers.com/images/hd/macbook-pro-color-explosion-art-ush01ydpoljxqp3o.jpg',
  idCard: 1,
  tags: ['MacBook', 'Apple', 'Desenvolvimento'],
  question: 'O que vocês querem ver por aqui  ? 🤔',
  options: ['Front-end', 'Back-end', 'DevOps'],
}

const cards = [
  {
    image:
      'https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png',
    title: 'Como centralizar uma div ?',
    qntComments: 10,
    data: '4 jun 2022',
    tags: ['html', 'css', 'javascript'],
    idCard: 1,
  },
  {
    image:
      'https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png',
    title: 'Como centralizar uma div ?',
    qntComments: 10,
    data: '4 jun 2022',
    tags: ['html', 'css', 'javascript'],
    idCard: 1,
  },
  {
    image:
      'https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png',
    title: 'Como centralizar uma div ?',
    qntComments: 10,
    data: '4 jun 2022',
    tags: ['html', 'css', 'javascript'],
    idCard: 1,
  },
  {
    image:
      'https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png',
    title: 'Como centralizar uma div ?',
    qntComments: 10,
    data: '4 jun 2022',
    tags: ['html', 'css', 'javascript'],
    idCard: 1,
  },
  {
    image:
      'https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png',
    title: 'Como centralizar uma div ?',
    qntComments: 10,
    data: '4 jun 2022',
    tags: ['html', 'css', 'javascript'],
    idCard: 1,
  },
]

export function Home() {
  return (
    <div className="bg-background-page-dark ">
      <div className="text-white text-center flex flex-col items-center justify-center gap-5 h-72 bg-rectangle-gradient bg-cover">
        <h1 className="text-4xl font-sans">Blog dos SpiderLinkers</h1>
        <p className="w-card-text-width text-center">
          Bem-vindo ao nosso blog de tecnologia! Aqui, desvendamos o mundo da
          inovação, compartilhando novidades, análises e dicas práticas para que
          você aproveite ao máximo o potencial da tecnologia em sua vida diária.
          Junte-se a nós nesta empolgante jornada rumo ao futuro digital!
        </p>
      </div>

      <div className="flex flex-col items-center gap-24 mt-10">
        <div className=" flex justify-center gap-7 ">
          <CardEmphasis
            author={mock.author}
            imgAuthor={mock.imgAuthor}
            title={mock.title}
            date={mock.date}
            imgCard={mock.imgCard}
            tags={mock.tags}
          />
          <CardSurvey options={mock.options} question={mock.question} />
        </div>
        <div className="grid grid-cols-3 gap-26">
          {cards &&
            cards.map((card) => <CardPost key={card.idCard} {...card} />)}
        </div>
      </div>
    </div>
  )
}
