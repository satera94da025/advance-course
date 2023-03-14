import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    label: "label",
    options: [
        { value: '123', content: 'First' },
        { value: '124', content: 'Second' },
        { value: '125', content: 'Third' },
    ],
};
