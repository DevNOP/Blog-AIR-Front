import { withRouter } from 'storybook-addon-react-router-v6'
import Login from '../pages/Login'

export default {
  title: 'Pages/Login',
  component: Login,
  decorators: [withRouter],
}

export const Default = {}
