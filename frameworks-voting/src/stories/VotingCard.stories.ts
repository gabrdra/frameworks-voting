import { Meta, Story } from '@storybook/angular/types-6-0';

import VotingCard from './VotingCard.component';

import Booth from './Booth.component'
import { moduleMetadata } from '@storybook/angular';

export default {
    title: 'Voting/VotingCard',
    component: VotingCard,
    decorators: [
        moduleMetadata({
            declarations: [VotingCard, Booth]
        })
    ]
} as Meta;

const Template: Story<VotingCard> = (args: VotingCard) =>({
    props:args,
})

export const Voting1 = Template.bind({});
Voting1.args = {
    title: 'Do you agree?',
    state: 'open',
    votes: [{option:'Yes', count:8}, {option:'No',count:3}]
}
export const Voting2 = Template.bind({});
Voting2.args = {
    title: 'Do you want ice cream?',
    state: 'close',
    votes: [{option:'Yes', count:8}, {option:'No', count:1}, {option:'Maybe', count:5}]
}