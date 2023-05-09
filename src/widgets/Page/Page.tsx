import {
    MutableRefObject, ReactNode, useRef, UIEvent,
} from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useInfinityScroll } from "shared/lib/hooks/useInfinityScroll/useInfinityScroll";
import { StateSchema } from "../../app/providers/StoreProvider";
import { getUIScrollByPath, uiActions } from "../../features/UI";
import { useAppDispatch } from "../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "../../shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useThrottle } from "../../shared/lib/hooks/useThrottle/useThrottle";
import cls from './Page.module.scss';

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const Page = ({ className, children, onScrollEnd }: PageProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => getUIScrollByPath(state, pathname));

    useInfinityScroll({
        triggerRef, wrapperRef, callback: onScrollEnd,
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(uiActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    return (
        <section onScroll={onScroll} ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
            {children}
            {onScrollEnd ? (
                <div
                    ref={triggerRef}
                    className={cls.trigger}
                />
            ) : null}
        </section>
    );
};
