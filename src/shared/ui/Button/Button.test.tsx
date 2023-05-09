import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from "shared/ui/Button/Button";

describe('Button', () => {
    test('render test', () => {
        render(<Button>text</Button>);
        expect(screen.getByText('text')).toBeInTheDocument();
    });
    test('theme test', () => {
        render(<Button theme={ButtonTheme.CLEAR}>text</Button>);
        expect(screen.getByText('text')).toHaveClass('clear');
        screen.debug();
    });
});
