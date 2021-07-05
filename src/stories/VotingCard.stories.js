import VotingCard from '../VotingCard.vue';

export default {
    title: 'Voting/VotingCard',
    component: VotingCard,
    argTypes: {
        title: '',
      state: {
        options: ['open', 'closed'],
        control: { type: 'radio' }
      },
      votes: []
    }
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { VotingCard },
    template: '<VotingCard v-bind="$props" />',
});

export const Voting1 = Template.bind({});
Voting1.args = {
    title: 'Do you agree?',
    state: 'open',
    votes: [{option:'Yes', count:8}, {option:'No',count:3}]
}
export const Voting2 = Template.bind({});
Voting2.args = {
    title: 'Do you want ice cream?',
    state: 'closed',
    votes: [{option:'Yes', count:8}, {option:'No', count:1}, {option:'Maybe', count:5}]
}