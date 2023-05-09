import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { Icon } from "shared/ui/Icon/Icon";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { ArticleView } from "../../model/types/article";
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string
    view: ArticleView
    onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = ({ className, view, onViewClick }: ArticleViewSelectorProps) => {
    const { t } = useTranslation();
    const onClick = (newView :ArticleView) => () => onViewClick?.(newView);
    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => {
                return (
                    <Button key={viewType.view} theme={ButtonTheme.CLEAR} onClick={onClick(viewType.view)}>
                        <Icon
                            key={viewType.view}
                            className={classNames('', { [cls.notSelected]: viewType.view !== view }, [])}
                            Svg={viewType.icon}
                        />
                    </Button>
                );
            })}
        </div>
    );
};
