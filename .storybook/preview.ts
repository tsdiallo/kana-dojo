import type { Preview } from '@storybook/react-vite';
import '../app/globals.css';

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    backgrounds: {
      default: 'paper',
      values: [
        { name: 'paper', value: '#FAFAF7' },
        { name: 'mist', value: '#F1F1EE' },
        { name: 'ink', value: '#0A0A0A' },
        { name: 'gold-light', value: '#FFE7A8' },
      ],
    },
    a11y: { config: { rules: [] } },
  },
};

export default preview;
