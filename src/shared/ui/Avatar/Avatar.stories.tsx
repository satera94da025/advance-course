import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    size: 150,
    src: 'https://gdb.voanews.com/455403FE-91EA-4ABE-8D29-3862282EC56B_cx0_cy9_cw0_w408_r1_s.jpg',
};

export const Small = Template.bind({});

Small.args = {
    size: 50,
    src: 'https://gdb.voanews.com/455403FE-91EA-4ABE-8D29-3862282EC56B_cx0_cy9_cw0_w408_r1_s.jpg',
};
