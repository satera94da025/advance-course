import { StateSchema } from "app/providers/StoreProvider";
import { getLoginState } from "./getLoginState";

describe('getLoginState.test', () => {
    test('should return all state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'alex',
                password: '123',
                isLoading: true,
                error: undefined,
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            error: undefined, isLoading: true, password: "123", username: "alex",
        });
    });
    test('should return undefined ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});
