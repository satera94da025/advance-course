import React, { FC, useCallback, useState } from 'react';
import { useTranslation } from "react-i18next";
import { classNames } from 'shared/lib/classNames/classNames';
import { LoginModal } from "../../../features/AuthByUsername";
import { Button } from "../../../shared/ui/Button/Button";

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={onShowModal}
                className={cls.links}
            >
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
};
