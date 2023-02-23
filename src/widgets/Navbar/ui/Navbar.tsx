import React, { FC, useCallback, useState } from 'react';
import { useTranslation } from "react-i18next";
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from "../../../shared/ui/Button/Button";
import { Modal } from "../../../shared/ui/Modal/Modal";

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();
    const onToggleModal = useCallback(() => {
        setIsAuthModal((prevState) => !prevState);
    }, []);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                // theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onToggleModal}
                className={cls.links}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
                Accusantium aut earum eos esse est fuga incidunt, iusto magni maxime placeat quaerat quas,
                quasi quod quos repellat vel, voluptatum? Error pariatur, quae. Aliquam aperiam asperiores
                consequatur dolor dolorem, dolores dolorum earum illum inventore iusto laboriosam nesciunt,
                nostrum, optio provident quia quidem recusandae saepe ut voluptatibus voluptatum. At beatae
                blanditiis deserunt error esse eum facilis officia omnis quasi sint sit, sunt tempora vel voluptate
                voluptatibus. A architecto consequatur, eos, ex ipsa ipsam ipsum nesciunt quas
                repellat rerum vitae, voluptatum? Aliquam deserunt facere fuga iusto nesciunt quidem quis, sapiente
                sint tenetur totam voluptatem?
            </Modal>
        </div>
    );
};
