import { Meta, Story } from '@storybook/angular/types-6-0';

import Results from './Results.component';

export default {
    title: 'Voting/Results',
    component: Results,
} as Meta;

const Template: Story<Results> = (args: Results) =>({
    props:args,
})
export const YesNo = Template.bind({});
YesNo.args = {
    votes: [{option:'Yes', count:8}, {option:'No',count:3}]
}
export const YesNoMaybe = Template.bind({});
YesNoMaybe.args = {
    votes: [{option:'Yes', count:8}, {option:'No', count:1}, {option:'Maybe', count:5}]
}