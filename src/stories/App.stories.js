import App from '../App.vue';

export default {
    title: 'Voting/App',
    component: App,
  };

const Template = () => ({
    components: { App },
    template: '<App />',
});

export const Example = Template.bind({});