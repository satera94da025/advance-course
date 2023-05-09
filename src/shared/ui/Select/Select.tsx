import { ChangeEvent, useMemo } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T
    content: string
}

interface SelectProps<T extends string> {
    className?: string
    label?: string
    options?: SelectOption<T>[]
    value?: T
    onChange?: (value: T) => void
    disabled?: boolean
}

export const Select = <T extends string> ({
    className, label, options, value, onChange, disabled,
}: SelectProps<T>) => {
    const optionList = useMemo(() => {
        return options?.map(({ value, content }) => (
            <option
                className={cls.option}
                value={value}
                key={value}
            >
                {content}
            </option>
        ));
    }, [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value as T);
        }
    };

    const mods: Mods = {
        [cls.readonly]: disabled,
    };
    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <select
                disabled={disabled}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    );
};
