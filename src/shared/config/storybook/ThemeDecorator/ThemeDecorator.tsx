import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
import { Story } from "@storybook/react";
import React from 'react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>

);
