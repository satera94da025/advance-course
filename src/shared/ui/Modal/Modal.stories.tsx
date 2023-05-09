import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from "../../../app/providers/ThemeProvider";
import { ThemeDecorator } from "../../config/storybook/ThemeDecorator/ThemeDecorator";
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet
        consectetur adipisicing elit.
        Accusantium aut earum eos esse est fuga incidunt, iusto magni maxime placeat quaerat quas,
        quasi quod quos repellat vel, voluptatum? Error pariatur, quae. Aliquam aperiam asperiores
        consequatur dolor dolorem, dolores dolorum earum illum inventore iusto laboriosam nesciunt,
        nostrum, optio provident quia quidem recusandae saepe ut voluptatibus voluptatum. At beatae
        blanditiis deserunt error esse eum facilis officia omnis quasi sint sit, sunt tempora vel voluptate
        voluptatibus. A architecto consequatur, eos, ex ipsa ipsam ipsum nesciunt quas
        repellat rerum vitae, voluptatum? Aliquam deserunt facere fuga iusto nesciunt quidem quis, sapiente
        sint tenetur totam voluptatem?`,
};

export const Dark = Template.bind({});

Dark.args = {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet
        consectetur adipisicing elit.
        Accusantium aut earum eos esse est fuga incidunt, iusto magni maxime placeat quaerat quas,
        quasi quod quos repellat vel, voluptatum? Error pariatur, quae. Aliquam aperiam asperiores
        consequatur dolor dolorem, dolores dolorum earum illum inventore iusto laboriosam nesciunt,
        nostrum, optio provident quia quidem recusandae saepe ut voluptatibus voluptatum. At beatae
        blanditiis deserunt error esse eum facilis officia omnis quasi sint sit, sunt tempora vel voluptate
        voluptatibus. A architecto consequatur, eos, ex ipsa ipsam ipsum nesciunt quas
        repellat rerum vitae, voluptatum? Aliquam deserunt facere fuga iusto nesciunt quidem quis, sapiente
        sint tenetur totam voluptatem?`,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
