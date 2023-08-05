import { CardPost } from '../components/cards/cardPost'

export default {
  title: 'Components/CardPost',
  component: CardPost,
  parameters: {
    layout: 'centered',
  },
  args: {
    image:
      'https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png',
    title: 'Como centralizar uma div ?',
    qntComments: 10,
    data: '4 jun 2022',
    tags: ['html', 'css', 'javascript'],
    idCard: 1,
  },
}

export const Default = {}
