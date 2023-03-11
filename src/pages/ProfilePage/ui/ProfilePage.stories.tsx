import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Template: ComponentStory<typeof ProfilePage> = (args: never) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'ADMIN',
            age: 28,
            country: Country.Russia,
            lastname: 'Dovydov',
            first: 'Alex',
            city: 'SPB',
            currency: Currency.RUB,
            avatar: 'https://gdb.voanews.com/455403FE-91EA-4ABE-8D29-3862282EC56B_cx0_cy9_cw0_w408_r1_s.jpg',
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'ADMIN',
            age: 28,
            country: Country.Russia,
            lastname: 'Dovydov',
            first: 'Alex',
            city: 'SPB',
            currency: Currency.RUB,
            avatar: 'https://gdb.voanews.com/455403FE-91EA-4ABE-8D29-3862282EC56B_cx0_cy9_cw0_w408_r1_s.jpg',
        },
    },
})];
