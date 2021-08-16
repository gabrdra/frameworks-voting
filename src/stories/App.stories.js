import React from 'react';

import App from '../App';

export default {
  title: 'Voting/App',
  component: App,
};

const Template = (args) => <App {...args}/>;

export const Example = Template.bind();