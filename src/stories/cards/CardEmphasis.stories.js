import { withRouter } from 'storybook-addon-react-router-v6'
import { CardEmphasis } from '../../components/cards/cardEmphasis'

export default {
  title: 'Components/Cards/CardEmphasis',
  component: CardEmphasis,
  parameters: {
    layout: 'centered',
  },
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
  },
}

export const Default = {}
