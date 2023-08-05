import { withRouter } from 'storybook-addon-react-router-v6'
import Register from '../pages/Register'

export default {
  title: 'Pages/Register',
  component: Register,
  decorators: [withRouter],
}

export const Default = {}
