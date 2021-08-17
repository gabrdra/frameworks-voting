import Booth from '../Booth.vue';

export default {
    title: 'Voting/Booth',
    component: Booth,
  };

const Template = (args, { argTypes }) => ({
    components: { Booth },
    setup() {
        return { args };
      },
    template: '<Booth v-bind="args" />',
});

export const YesNo = Template.bind({});
YesNo.args = {
    options: ["yes", "no"]
}
export const YesNoMaybe = Template.bind({});
YesNoMaybe.args = {
    options: ["yes", "no", "maybe"]
}