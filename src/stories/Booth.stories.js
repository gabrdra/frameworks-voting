import React from 'react';

import Booth from '../Booth';

export default {
  title: 'Voting/Booth',
  component: Booth,
};

const Template = (args) => <Booth {...args} />;

function vote(){
  return;
}

export const YesNo = Template.bind();
YesNo.args = {
    options: ['Yes', 'No'],
    onVote: vote
}
export const YesNoMaybe = Template.bind();
YesNoMaybe.args = {
  options: ['Yes', 'No', 'Maybe'],
  onVote: vote
}