import { withRouter } from 'storybook-addon-react-router-v6'
import ErrorPage from '../../pages/error-page'

export default {
  title: 'Components/Pages/Error-Page',
  component: ErrorPage,
  parameters: {
    layout: 'centered',
  },
  decorators: [withRouter],
}

export const Default = {}
