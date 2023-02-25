import {
    ChangeEvent, InputHTMLAttributes, useEffect, useRef, useState,
} from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
    className?: string
    value?: string
    onChange?: (value: string) => void
}

export const Input = ({
    className, value, onChange, type = 'text', placeholder, autoFocus, ...otherProps
}: InputProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const onFocus = () => setIsFocused(true);
    const onBlur = () => setIsFocused(false);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };
    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autoFocus]);

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}> `}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    className={cls.input}
                    autoFocus={autoFocus}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {
                    isFocused && (
                        <span style={{ left: `${caretPosition * 7}px` }} className={cls.caret} />
                    )
                }
            </div>

        </div>
    );
};
