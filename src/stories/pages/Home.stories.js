import { withRouter } from 'storybook-addon-react-router-v6'
import Home from '../../pages/Home'

export default {
  title: 'Components/Pages/Home',
  component: Home,
  parameters: {
    layout: 'centered',
  },
  decorators: [withRouter],
}

export const Default = {}
