import { StateSchema } from "app/providers/StoreProvider";
import { ValidateProfileError } from "../../types/profile";
import { getProfileValidateErrors } from "./getProfileValidateErrors";

describe('getProfileValidateErrors.test', () => {
    test('should return errors[]', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.NO_DATA,
                ],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.NO_DATA,
        ]);
    });
    test('should return undefined ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
