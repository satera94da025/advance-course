import React, {useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import ThemeSwitcher from "shared/ThemeSwitcher/ui/ThemeSwitcher";
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

const Sidebar = ({className}: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => setCollapsed(prevState => !prevState)


    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
        <button onClick={onToggle}>toggle sidebar</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};

export default Sidebar;