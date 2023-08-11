import { Input } from '../../components/forms/input'

export default {
  title: 'Components/Forms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  args: {
    name: 'email',
    span: 'Email',
    type: 'email',
    placeholder: '@gmail.com',
  },
}

export const Default = {}
