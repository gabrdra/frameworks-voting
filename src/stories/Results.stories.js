import React from 'react';

import Results from '../Results';

export default {
  title: 'Voting/Results',
  component: Results,
};

const Template = (args) => <Results {...args} />;

export const Voting1 = Template.bind();
Voting1.args = {
    title: 'Do you agree?',
    votes: [{option:'Yes', count:8}, {option:'No',count:3}]
}