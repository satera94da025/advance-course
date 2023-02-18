import { Theme } from "app/providers/ThemeProvider";
import { Story } from "@storybook/react";
import React from 'react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
