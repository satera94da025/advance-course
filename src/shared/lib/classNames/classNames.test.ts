import { classNames } from './classNames';

describe('classNames', () => {
    test('with only param', () => {
        expect(classNames('cls')).toBe('cls');
    });

    test('with additional class', () => {
        const expectedString = 'cls class1 class2';
        expect(classNames('cls', {}, ['class1', 'class2'])).toBe(expectedString);
    });

    test('with mods and additional ', () => {
        const expectedString = 'cls class1 class2 hovered scrollable';
        expect(classNames('cls', {
            hovered: true,
            scrollable: true,
        }, ['class1', 'class2'])).toBe(expectedString);
    });

    test('with mods false and additional ', () => {
        const expectedString = 'cls class1 class2 hovered';
        expect(classNames('cls', {
            hovered: true,
            scrollable: false,
        }, ['class1', 'class2'])).toBe(expectedString);
    });

    test('with mods undefined and additional ', () => {
        const expectedString = 'cls class1 class2 hovered';
        expect(classNames('cls', {
            hovered: true,
            scrollable: undefined,
        }, ['class1', 'class2'])).toBe(expectedString);
    });
});
