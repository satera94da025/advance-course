import { useCallback, useState, memo } from 'react';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from 'shared/lib/classNames/classNames';
import { getUserAuthData, userActions } from "entities/User";

import { LoginModal } from "features/AuthByUsername";
import { Button } from "shared/ui/Button/Button";

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    onClick={onLogout}
                    className={cls.links}
                >
                    {t('Выйти')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={onShowModal}
                className={cls.links}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </div>
    );
});
