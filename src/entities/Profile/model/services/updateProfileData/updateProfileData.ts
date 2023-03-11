import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { Profile } from "../../types/profile";

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const formData = getProfileForm(getState());
        try {
            const { data } = await extra.api.put<Profile>('profile', formData);
            return data;
        } catch (e) {
            console.log(e);
            return rejectWithValue(String(e));
        }
    },
);
