import { withRouter } from 'storybook-addon-react-router-v6'
import PageCard from '../pages/PageCard'

export default {
  title: 'Pages/PageCard',
  component: PageCard,
  decorators: [withRouter],
}

export const Default = {}