import {
    ReactNode, MouseEvent, useState, useRef, useEffect, useCallback,
} from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "../../../app/providers/ThemeProvider";
import { Portal } from "../Portal/Portal";
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

const ANIMATION_DELAY = 300;

export const Modal = ({
    className,
    children,
    onClose,
    isOpen,
}: ModalProps) => {
    const timeRef = useRef<ReturnType<typeof setTimeout>>();

    const { theme } = useTheme();

    const [isClosing, setIsClosing] = useState(false);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onContentClick = (e: MouseEvent<HTMLDivElement>): void => e.stopPropagation();

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
        [cls[theme]]: true,
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        console.log(1);
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
            console.log(2);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div
                        className={cls.content}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
};
