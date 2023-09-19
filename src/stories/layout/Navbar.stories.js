import { withRouter } from 'storybook-addon-react-router-v6'
import { Navbar } from '../../components/layout/navbar'

export default {
  title: 'Components/Layout/NavBar',
  component: Navbar,

  decorators: [withRouter],
  args: {
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
  },
}

export const Default = {}
