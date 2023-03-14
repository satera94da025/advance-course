import {
    ChangeEvent, InputHTMLAttributes, useEffect, useRef, useState, memo,
} from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps{
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    readonly?: boolean
}

export const Input = memo(({
    className, value, onChange, type = 'text', placeholder, readonly, autoFocus, ...otherProps
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

    const isCareVisible = isFocused && !readonly;

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autoFocus]);

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}> `}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    {...otherProps}
                    ref={ref}
                    readOnly={readonly}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    className={cls.input}
                    autoFocus={autoFocus}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onSelect={onSelect}
                />
                {
                    isCareVisible && (
                        <span style={{ left: `${caretPosition * 7}px` }} className={cls.caret} />
                    )
                }
            </div>

        </div>
    );
});
