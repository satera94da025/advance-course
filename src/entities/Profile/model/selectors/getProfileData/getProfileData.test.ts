import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "../../../../Country";
import { Currency } from "../../../../Currency";
import { getProfileData } from "./getProfileData";

describe('getProfileData.test', () => {
    test('should return data', () => {
        const data = {
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
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should return undefined ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
