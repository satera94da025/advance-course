import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../../../../entities/Counter";
import { StateSchema } from "./StateSchema";

export const createReduxStore = (initialState?: StateSchema) => {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
        },
        // eslint-disable-next-line no-undef
        devTools: __IS_DEV__,
    });
};
