import Results from '../Results.vue'

export default {
    title: 'Voting/Results',
    component: Results,
    argTypes: {
      votes: []
    }
  };
  
const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Results },
    template: '<Results v-bind="$props" />',
});
  
export const Voting1 = Template.bind();
Voting1.args = {
    votes: [{option:'Yes', count:8}, {option:'No', count:3}]
}
export const Voting2 = Template.bind();
Voting2.args = {
    votes: [{option:'Yes', count:8}, {option:'No', count:3}, {option:'Maybe', count:5}]
}