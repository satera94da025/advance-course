import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "../../config/storybook/ThemeDecorator/ThemeDecorator";

import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'SOME TITLE QWERTY',
    text: 'SOME TEXT QWERTY',
};

export const Error = Template.bind({});
Error.args = {
    title: 'SOME TITLE QWERTY',
    text: 'SOME TEXT QWERTY',
    theme: TextTheme.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'SOME TITLE QWERTY',
    text: 'SOME TEXT QWERTY',
    theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'SOME TITLE QWERTY',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'SOME TITLE QWERTY',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'SOME TITLE QWERTY',
    text: 'SOME TEXT QWERTY',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'SOME TITLE QWERTY',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'SOME TITLE QWERTY',
};

OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Some title',
    text: 'SOME TITLE QWERTY',
    size: TextSize.L,
};
