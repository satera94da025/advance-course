import { userEvent } from "@storybook/testing-library";
import { screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Counter } from "./Counter";

describe('Counter!', () => {
    test('render Counter', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 0 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('0');
    });
    test('increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 1 } },
        });
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('2');
    });
    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 0 } },
        });
        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('-1');
    });
});
