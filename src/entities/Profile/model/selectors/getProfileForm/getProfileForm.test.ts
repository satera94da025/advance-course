import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "../../../../Country";
import { Currency } from "../../../../Currency";
import { getProfileForm } from "./getProfileForm";

describe('getProfileForm.test', () => {
    test('should return form', () => {
        const form = {
            username: 'ADMIN',
            age: 28,
            country: Country.Russia,
            lastname: 'Dovydov',
            first: 'Alex',
            city: 'SPB',
            currency: Currency.RUB,
            avatar: 'https://gdb.voanews.com/455403FE-91EA-4ABE-8D29-3862282EC56B_cx0_cy9_cw0_w408_r1_s.jpg',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test('should return undefined ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
