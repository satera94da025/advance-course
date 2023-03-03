import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";

describe('getLoginUsername.test', () => {
    test('should return alex', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'alex',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('alex');
    });
    test('should return "" ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual("");
    });
});
