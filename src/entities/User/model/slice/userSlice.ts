import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE } from "../../../../shared/const/localstorage";
import { User, UserSchema } from "../types/user";

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state, action: PayloadAction<User>) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state, action: PayloadAction<User>) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE);
        },
    },
});

export const { actions: userActions } = userSlice;

export const { reducer: userReducer } = userSlice;
