import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from "../../../Country";
import { Currency } from "../../../Currency";
import { ProfileCard } from "./ProfileCard";

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    data: {
        username: 'ADMIN',
        age: 28,
        country: Country.Russia,
        lastname: 'Dovydov',
        first: 'Alex',
        city: 'SPB',
        currency: Currency.RUB,
        avatar: 'https://gdb.voanews.com/455403FE-91EA-4ABE-8D29-3862282EC56B_cx0_cy9_cw0_w408_r1_s.jpg',
    },
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
    error: 'error',
};
