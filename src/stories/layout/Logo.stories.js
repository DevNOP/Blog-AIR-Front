import { withRouter } from 'storybook-addon-react-router-v6'
import { Logo } from '../../components/layout/logo'

export default {
  title: 'Components/Layout/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  decorators: [withRouter],
}

export const Default = {}
