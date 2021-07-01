import React from 'react';

import Results from '../Results';

export default {
  title: 'Voting/Results',
  component: Results,
  argTypes: {
    votes: []
  }
};

const Template = (args) => <Results {...args} />;

export const Voting1 = Template.bind();
Voting1.args = {
    votes: [{option:'Yes', count:8}, {option:'No', count:3}]
}
export const Voting2 = Template.bind();
Voting2.args = {
    votes: [{option:'Yes', count:8}, {option:'No', count:3}, {option:'Maybe', count:5}]
}