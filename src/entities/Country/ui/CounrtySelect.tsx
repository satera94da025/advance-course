import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Select } from "shared/ui/Select/Select";
import { Country } from "../model/types/country";

interface CountrySelectProps {
    className?: string
    readonly?: boolean
    value?: Country
    onChange: (value: Country) => void
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(({
    className, readonly, value, onChange,
}: CountrySelectProps) => {
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        if (onChange) {
            onChange(value as Country);
        }
    }, [onChange]);
    return (
        <Select
            className={classNames('', {}, [className])}
            disabled={readonly}
            label={t("Укажите страну")}
            options={options}
            value={value}
            onChange={onChangeHandler}
        />
    );
});
