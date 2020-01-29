import { configure } from '@storybook/react';
import '../src/index.css';
// automatically import all files ending in *.stories.js
import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
 //for adding docs in doc tab
addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

configure(require.context('../stories', true, /\.stories\.js$/), module);
