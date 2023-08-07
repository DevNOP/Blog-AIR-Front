import { SecondComment } from '../../components/comments/secondComment'

export default {
  title: 'Components/Comments/SecondComment',
  component: SecondComment,
  parameters: {
    layout: 'centered',
  },
  args: {
    author: 'João da Pedra',
    date: '06 jun 2020',
    imgPerfil:
      'https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg',
    text: 'Não sei como pessoas não gostam de front-end e muito legal ver as coisas na tela funcionando, além de ser MUITO FÁCIL CENTRALIZAR UMA DIV. 👻👻👻👻',
    like: '7',
    comment: '12',
  },
}

export const Default = {}
