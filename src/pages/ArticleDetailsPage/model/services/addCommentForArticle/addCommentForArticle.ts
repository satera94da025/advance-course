import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticleDetailsData } from "entities/Article/model/selectors/articleDetails";
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetails/addCommentForArticle',
    async (
        text,
        thunkApi,
    ) => {
        const {
            extra, rejectWithValue, getState, dispatch,
        } = thunkApi;

        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue('no data');
        }

        try {
            const { data } = await extra.api.post<Comment>('comments', {
                articleId: article.id,
                userId: userData.id,
                text,
            });
            if (!data) throw new Error();
            dispatch(fetchCommentsByArticleId(article.id));
            return data;
        } catch (e) {
            return rejectWithValue(String(e));
        }
    },
);
