import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from 'shared/ui/Text/Text';
import { Comment } from "../../model/types/comment";
import { CommentCard } from "../CommentCard/CommentCard";
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
}

export const CommentList = ({
    className, comments, isLoading,
}: CommentListProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length ? comments.map((comment) => (
                <CommentCard isLoading={isLoading} className={cls.comment} comment={comment} />
            )) : <Text text={t('Комментарий отсутствует')} />}
        </div>
    );
};
