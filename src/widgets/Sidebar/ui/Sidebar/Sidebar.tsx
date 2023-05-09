import {
    useMemo, useState, memo, PropsWithChildren, DetailedHTMLProps, HTMLAttributes,
} from 'react';
import { useSelector } from "react-redux";
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ui/ThemeSwitcher';
import { getSidebarItems } from "../../model/selectors/getSidebarItems";

import cls from './Sidebar.module.scss';
import { SidebarItem } from "./SidebarItem/SidebarItem";

type SidebarProps = PropsWithChildren<{
    className?: string
}> & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => setCollapsed((prevState) => !prevState);

    const sidebarItemsList = useSelector(getSidebarItems);

    const items = useMemo(
        () => sidebarItemsList.map((item) => (
            <SidebarItem item={item} key={item.path} collapsed={collapsed} />
        )),
        [collapsed, sidebarItemsList],
    );

    return (
        <aside
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
                {items}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </aside>
    );
});
