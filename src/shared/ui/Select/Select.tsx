import { ChangeEvent, useMemo, memo } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from './Select.module.scss';

export interface SelectOption {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    options?: SelectOption[]
    value?: string
    onChange?: (value: string) => void
    disabled?: boolean
}

export const Select = memo(({
    className, label, options, value, onChange, disabled,
}: SelectProps) => {
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
            onChange(e.target.value);
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
});
