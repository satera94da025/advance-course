import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { profileReducer } from "entities/Profile";
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { addCommentFormReducer } from "features/addCommentsForm/model/slices/addCommentFormSlice";
import {
    articleDetailsCommentsReducer,
} from "pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice";

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
