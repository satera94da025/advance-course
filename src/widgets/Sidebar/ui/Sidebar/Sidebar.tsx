import React, { FC, useState } from 'react';
import { useTranslation } from "react-i18next";
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ui/ThemeSwitcher';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

import cls from './Sidebar.module.scss';

type SidebarProps = React.PropsWithChildren<{
    className?: string
}> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => setCollapsed((prevState) => !prevState);
    const { t } = useTranslation();

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                cls.Sidebar,
                { [cls.collapsed]: collapsed },
                [className],
            )}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cls.collapseBtn}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <div>
                    <AppLink className={cls.item} to={RoutePath.main} theme={AppLinkTheme.SECONDARY}>
                        <div className={cls.icon}>
                            <MainIcon />
                        </div>
                        <span className={cls.link}>
                            {t('Главная')}
                        </span>
                    </AppLink>
                </div>

                <div>
                    <AppLink className={cls.item} to={RoutePath.about} theme={AppLinkTheme.SECONDARY}>
                        <div className={cls.icon}>
                            <AboutIcon />
                        </div>
                        <span className={cls.link}>
                            {t('О сайте')}
                        </span>
                    </AppLink>
                </div>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
};
