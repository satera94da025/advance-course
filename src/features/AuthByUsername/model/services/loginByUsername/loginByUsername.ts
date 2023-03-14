import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE } from "shared/const/localstorage";
import { ThunkConfig } from "app/providers/StoreProvider";

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (
        authData,
        thunkApi,
    ) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;
        try {
            const { data } = await extra.api.post<User>('login', authData);
            if (!data) throw new Error();
            localStorage.setItem(USER_LOCALSTORAGE, JSON.stringify(data));
            dispatch(userActions.setAuthData(data));
            extra.navigate('/about');
            return data;
        } catch (e) {
            console.log(e);
            return rejectWithValue(String(e));
        }
    },
);
