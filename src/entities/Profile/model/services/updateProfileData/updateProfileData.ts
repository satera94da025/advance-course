import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { Profile, ValidateProfileError } from "../../types/profile";
import { validateProfileData } from "../validateProfileData/validateProfileData";

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[] | string>>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const formData = getProfileForm(getState());

        const errors = validateProfileData(formData);
        if (errors.length) {
            return rejectWithValue(errors);
        }
        try {
            const { data } = await extra.api.put<Profile>(`profile/${formData?.id}`, formData);
            if (!data) {
                throw new Error(ValidateProfileError.SERVER_ERROR);
            }
            return data;
        } catch (e) {
            console.log(e);
            console.log(ValidateProfileError.SERVER_ERROR);
            return rejectWithValue(String(e));
        }
    },
);
