import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { classNames } from "shared/lib/classNames/classNames";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Card } from "shared/ui/Card/Card";
import { Icon } from "shared/ui/Icon/Icon";
import { Text } from 'shared/ui/Text/Text';
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from "../../model/types/article";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string
    article: Article
    view: ArticleView
}

export const ArticleListItem = ({ className, article, view }: ArticleListItemProps) => {
    const { t } = useTranslation('article');
    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>

    );
    const title = <Text text={article.title} className={cls.title} />;

    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [article.id, navigate]);

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(({ type }) => type === ArticleBlockType.TEXT) as ArticleTextBlock;

        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    {title}
                    {types}
                    <img alt={article.title} src={article.img} className={cls.img} />
                    {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />}
                    <div className={cls.footer}>
                        <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
                            {t('Читать далее...')}
                        </Button>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card onClick={onOpenArticle} className={cls.card}>
                <div className={cls.imgWrapper}>
                    <img alt={article.title} src={article.img} className={cls.img} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                {title}
            </Card>
        </div>
    );
};
