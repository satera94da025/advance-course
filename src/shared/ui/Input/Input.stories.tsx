import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    placeholder: 'Primary Input',
    value: 'some value',
};

export const Secondary = Template.bind({});
Secondary.args = {
    placeholder: 'Secondary Input',
    value: 'some value',
};
Secondary.decorators = [ThemeDecorator(Theme.DARK)];
