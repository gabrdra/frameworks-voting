import React from 'react';

import VotingCard from '../VotingCard';

export default {
  title: 'Voting/VotingCard',
  component: VotingCard,
};

const Template = (args) => <VotingCard {...args} />;

export const Voting1 = Template.bind();
Voting1.args = {
    title: 'Do you agree?',
    votes: [{option:'Yes', count:8}, {option:'No',count:3}]
}