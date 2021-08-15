import { Meta, Story } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms'
import Form from './Form.component';
export default {
    title: 'Voting/Form',
    decorators: [
        moduleMetadata({
            imports:[FormsModule]
        })
    ],
    argTypes: {},
    component: Form,
} as Meta;

const Template: Story<Form> = () =>({})
export const Example = Template.bind({});