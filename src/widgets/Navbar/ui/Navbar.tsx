import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import ThemeSwitcher from "shared/ThemeSwitcher/ui/ThemeSwitcher";
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";

import cls from './Navbar.module.scss'


interface NavbarProps {
    className?: string
}

const Navbar: FC<NavbarProps> =  ({className}) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink to={'/'} className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>Главная</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>О сайте</AppLink>
            </div>
        </div>
    );
};

export default Navbar;