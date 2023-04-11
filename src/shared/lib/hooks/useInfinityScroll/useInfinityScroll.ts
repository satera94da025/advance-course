import { MutableRefObject, useEffect } from "react";

export interface UseInfinityScrollOptions {
    callback?: () => void
    triggerRef: MutableRefObject<HTMLElement>
    wrapperRef: MutableRefObject<HTMLElement>
}

export const useInfinityScroll = ({ callback, wrapperRef, triggerRef }: UseInfinityScrollOptions) => {
    useEffect(() => {
        let observer: IntersectionObserver;
        const currentTrigger = triggerRef.current;
        const currentWrapper = wrapperRef.current;
        if (callback) {
            const options = {
                root: currentWrapper,
                rootMargin: '0px',
                threshold: 1.0,
            };
            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);
            observer.observe(currentTrigger);
        }
        return () => {
            if (observer && currentTrigger) {
                observer.unobserve(currentTrigger);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
};
