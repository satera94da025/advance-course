import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE } from "shared/const/localstorage";

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const { data } = await axios.post<User>('http://localhost:8000/login', authData);
            if (!data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE, JSON.stringify(data));
            thunkAPI.dispatch(userActions.setAuthData(data));
            return data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue(String(e));
        }
    },
);
