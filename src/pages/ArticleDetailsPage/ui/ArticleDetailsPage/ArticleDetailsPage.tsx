import { useSelector } from "react-redux";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { CommentList } from "entities/Comment";
import { Text } from 'shared/ui/Text/Text';
import {
    DynamicModuleLoader,
    ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { AddCommentForm } from "features/addCommentsForm";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

import {
    useInitialEffect,
} from "../../../../shared/lib/hooks/useInitialEffect/useInitialEffect";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import {
    addCommentForArticle,
} from "../../model/services/addCommentForArticle/addCommentForArticle";
import {
    fetchCommentsByArticleId,
} from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { articleDetailsCommentsReducer, getArticleComments } from "../../model/slices/articleDetailsCommentsSlice";
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>

    );
};

export default memo(ArticleDetailsPage);
