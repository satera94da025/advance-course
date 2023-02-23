import { Theme } from "app/providers/ThemeProvider";
import { Story } from "@storybook/react";
import React from 'react';
import { ThemeProvider } from "../../../../app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>

);
