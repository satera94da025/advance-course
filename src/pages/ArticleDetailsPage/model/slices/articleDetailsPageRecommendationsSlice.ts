import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import { fetchArticleRecommendations } from "../services/fetchArticleRecommendations/fetchArticleRecommendations";

import { ArticleDetailsPageRecommendationsSchema } from "../types/ArticleDetailsPageRecommendationsSchema";

const recommendationAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage.recommendations || recommendationAdapter.getInitialState(),
);

export const articleDetailsPageRecommendationsSlice = createSlice({
    name: "articleDetailsPageRecommendations",
    initialState: recommendationAdapter.getInitialState<ArticleDetailsPageRecommendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
                state.isLoading = false;
                recommendationAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleDetailsPageRecommendationsActions } = articleDetailsPageRecommendationsSlice;
export const { reducer: articleDetailsPageRecommendationsReducer } = articleDetailsPageRecommendationsSlice;
