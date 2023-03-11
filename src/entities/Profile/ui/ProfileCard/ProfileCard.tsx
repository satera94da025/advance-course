import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Input } from "shared/ui/Input/Input";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Avatar } from "shared/ui/Avatar/Avatar";
import Loader from "shared/ui/Loader/Loader";
import { Currency, CurrencySelect } from "entities/Currency";
import { Country, CountrySelect } from "entities/Country";

import { Profile } from "../../model/types/profile";
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
    data?: Profile
    isLoading?: boolean
    error?: string
    readonly?: boolean
    onChangeFirstName?: (value?: string) => void
    onChangeLastName?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeUsername?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void
    onChangeCurrency?: (currency: Currency) => void
    onChangeCountry?: (country: Country) => void
}

export const ProfileCard = memo(({
    className, data, error, isLoading, onChangeFirstName,
    onChangeLastName, readonly, onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry,
}: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                <div className={cls.avatarWrapper}>
                    {data?.avatar && <Avatar alt="avatar" src={data?.avatar} />}
                </div>

                <Input
                    onChange={onChangeFirstName}
                    className={cls.input}
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    readonly={readonly}
                />
                <Input
                    onChange={onChangeLastName}
                    className={cls.input}
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    readonly={readonly}
                />
                <Input
                    onChange={onChangeAge}
                    className={cls.input}
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    readonly={readonly}
                />
                <Input
                    onChange={onChangeCity}
                    className={cls.input}
                    value={data?.city}
                    placeholder={t('Ваш город')}
                    readonly={readonly}
                />
                <Input
                    onChange={onChangeUsername}
                    className={cls.input}
                    value={data?.username}
                    placeholder={t('Ваше имя пользователя')}
                    readonly={readonly}
                />
                <Input
                    onChange={onChangeAvatar}
                    className={cls.input}
                    value={data?.avatar}
                    placeholder={t('Ваш аватар')}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={cls.input}
                    onChange={onChangeCurrency}
                    value={data?.currency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    onChange={onChangeCountry}
                    value={data?.country}
                    readonly={readonly}
                />
            </div>
        </div>
    );
});
