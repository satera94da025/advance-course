import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/testAsyncThunk";
import { loginByUsername } from "./loginByUsername";

jest.mock('axios');

describe('loginByUsername', () => {
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;
    //
    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });

    // test('success login', async () => {
    //     const userValue = { username: '123', id: '1' };
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    //     const action = loginByUsername({ username: '123', password: '123' });
    //     const { meta, payload } = await action(dispatch, getState, undefined);
    //
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(meta.requestStatus).toBe('fulfilled');
    //     expect(payload).toEqual(userValue);
    // });
    //
    // test('error login', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const action = loginByUsername({ username: '123', password: '123' });
    //     const { meta, payload } = await action(dispatch, getState, undefined);
    //
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(meta.requestStatus).toBe('rejected');
    //     expect(payload).toEqual('Error');
    // });

    test('success login', async () => {
        const userValue = { username: '123', id: '1' };

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const { meta, payload } = await thunk.callThunk({ username: 'admin', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(thunk.api.post).toHaveBeenCalled();
        expect(meta.requestStatus).toBe('fulfilled');
        expect(payload).toEqual(userValue);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const { meta, payload } = await thunk.callThunk({ username: 'admin', password: '1234' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(meta.requestStatus).toBe('rejected');
        expect(payload).toEqual('Error');
    });
});
