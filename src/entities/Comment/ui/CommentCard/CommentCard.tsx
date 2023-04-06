import { classNames } from "shared/lib/classNames/classNames";
import { Text } from 'shared/ui/Text/Text';

import { Avatar } from "shared/ui/Avatar/Avatar";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Comment } from "../../model/types/comment";
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string
    comment?: Comment
    isLoading?: boolean
}

export const CommentCard = ({ className, comment, isLoading }: CommentCardProps) => {
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="10%" />
                    <Skeleton width={100} height={16} className={cls.username} />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </div>
        );
    }
    if (!comment) {
        return null;
    }
    return (
        <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
            <AppLink className={cls.header} to={`${RoutePath.profile}${comment.user.id}`}>
                {comment.user.avatar ? <Avatar src={comment.user?.avatar} size={30} /> : null}
                <Text className={cls.username} title={comment.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </div>
    );
};
