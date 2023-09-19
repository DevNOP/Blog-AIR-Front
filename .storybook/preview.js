import {themes} from '@storybook/theming'
import "../src/index.css";


/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "light",
          value: "#f5f5f5",
        },
        {
          name: "dark",
          value: "#0F121D",
        },
      ],
  },
  docs: {
    theme: themes.dark,
  }
  },
};

export default preview;
