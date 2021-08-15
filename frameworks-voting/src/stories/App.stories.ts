import { Meta, Story } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import VotingCard from './VotingCard.component';
import Results from './Results.component'
import Booth from './Booth.component'
import Form from './Form.component';
import App from './App.component';
export default {
    title: 'Voting/App',
    decorators: [
        moduleMetadata({
            declarations: [VotingCard, Form, Booth, Results],
            imports:[FormsModule]
        })
    ],
    argTypes: {},
    component: App,
} as Meta;

const Template: Story<App> = () =>({})
export const Example = Template.bind({});