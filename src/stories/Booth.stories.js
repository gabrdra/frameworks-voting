import Booth from '../Booth.vue';

export default {
    title: 'Voting/Booth',
    component: Booth,
  };

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Booth },
    template: '<Booth v-bind="$props" />',
});

export const YesNo = Template.bind({});
YesNo.args = {
    options: ["yes", "no"]
}
export const YesNoMaybe = Template.bind({});
YesNoMaybe.args = {
    options: ["yes", "no", "maybe"]
}