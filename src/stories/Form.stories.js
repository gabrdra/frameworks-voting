import Form from '../Form.vue';

export default {
    title: 'Voting/Form',
    component: Form,
  };

const Template = () => ({
    components: { Form },
    template: '<Form />',
});

export const Example = Template.bind({});