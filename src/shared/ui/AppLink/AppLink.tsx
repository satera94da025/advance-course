import * as React from "react";
import { AnchorHTMLAttributes, FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>{
  className?: string
  children: ReactNode
  to: string
  otherProps?: any
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to, className, children, otherProps, theme = AppLinkTheme.PRIMARY,
    } = props;

    return (
        <Link
            {...otherProps}
            to={to}
            className={classNames(
                cls.AppLink,
                { theme },
                [className, cls[theme]],
            )}
        >
            {children}
        </Link>
    );
};
