import { ButtonComment } from '../components/buttonComment'
import { CardPagePost } from '../components/cardPagePost'
import { MainComment } from '../components/mainComment'
import { SecondComment } from '../components/secondComment'

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

const post = {
  title: 'Introdução',
  text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need  be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
  about: 'asdsd',
}

const comment = {
  author: 'Cleiton Silva',
  date: '04 jun 2020',
  imgPerfil:
    'https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg',
  text: 'Não sei como pessoas não gostam de front-end e muito legal ver as coisas na tela funcionando, além de ser MUITO FACIL CENTRALIZAR UMA DIV. 👻👻👻👻',
  like: '10',
}

const secondComment = {
  author: 'João da Pedra',
  date: '06 jun 2020',
  imgPerfil:
    'https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg',
  text: 'Não sei como pessoas não gostam de front-end e muito legal ver as coisas na tela funcionando, além de ser MUITO FACIL CENTRALIZAR UMA DIV. 👻👻👻👻',
  like: '7',
  comment: '12',
}

export function PageCard() {
  return (
    <div className="bg-primary h-full">
      <CardPagePost
        author={mock.author}
        imgAuthor={mock.imgAuthor}
        title={mock.title}
        date={mock.date}
        imgCard={mock.imgCard}
        tags={mock.tags}
      />
      <section className="text-gray-100 px-52 mt-10">
        <h1 className="text-3xl font-semibold mb-10">{post.title}</h1>
        <p className="text-xl ">{post.text}</p>
      </section>
      <hr className="mx-48 mt-20"></hr>
      <div className="px-52 mt-10">
        <ButtonComment text={'Comentar'} />
      </div>
      <div>
        <MainComment
          author={comment.author}
          imgPerfil={comment.imgPerfil}
          date={comment.date}
          like={comment.like}
          text={comment.text}
        />
      </div>
      <hr className="mx-48 mt-5"></hr>
      <div>
        <SecondComment
          author={secondComment.author}
          imgPerfil={secondComment.imgPerfil}
          date={secondComment.date}
          like={secondComment.like}
          text={secondComment.text}
          comment={secondComment.comment}
        />
      </div>
      <div>
        <SecondComment
          author={secondComment.author}
          imgPerfil={secondComment.imgPerfil}
          date={secondComment.date}
          like={secondComment.like}
          text={secondComment.text}
          comment={secondComment.comment}
        />
      </div>
    </div>
  )
}
