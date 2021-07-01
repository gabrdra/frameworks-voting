import React from 'react';

import Booth from '../Booth';

export default {
  title: 'Voting/Booth',
  component: Booth,
};

const Template = (args) => <Booth {...args} />;

export const YesNo = Template.bind();
YesNo.args = {
    options: ['Yes', 'No']
}
export const YesNoMaybe = Template.bind();
YesNoMaybe.args = {
  options: ['Yes', 'No', 'Maybe']
}