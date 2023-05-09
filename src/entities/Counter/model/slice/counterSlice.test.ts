import { CounterSchema } from "../types/counterSchema";
import { counterActions, counterReducer } from "./counterSlice";

describe('counterSlice.test', () => {
    test('decrement value', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });
    test('increment value', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });
    test('empty value', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
