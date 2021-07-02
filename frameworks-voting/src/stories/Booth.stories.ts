import { Meta, Story } from '@storybook/angular/types-6-0';

import Booth from './Booth.component';

export default {
    title: 'Voting/Booth',
    component: Booth,
} as Meta;

const Template: Story<Booth> = (args: Booth) =>({
    props:args,
})
export const YesNo = Template.bind({});
YesNo.args = {
    options: ['Yes', 'No']
}
export const YesNoMaybe = Template.bind({});
YesNoMaybe.args = {
  options: ['Yes', 'No', 'Maybe']
}