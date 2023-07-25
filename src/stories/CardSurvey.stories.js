import { CardSurvey } from '../components/cardSurvey'

export default {
  title: 'Components/CardSurvey',
  component: CardSurvey,
  parameters: {
    layout: 'centered',
  },
  args: {
    question: 'O que vocês querem ver por aqui  ? 🤔',
    options: ['Front-end', 'Back-end', 'DevOps'],
  },
}

export const Default = {}
