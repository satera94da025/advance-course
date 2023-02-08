import React, {useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {LangSwitcher} from "widgets/LangSwitcher";
import ThemeSwitcher from "widgets/ThemeSwitcher/ui/ThemeSwitcher";
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
                <LangSwitcher />
            </div>
        </div>
    );
};

export default Sidebar;