import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { getProfileReadonly, profileActions, updateProfileData } from "entities/Profile";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = memo(({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const buttonText = readonly ? t('Редактировать') : t('Отменить');

    const onEdit = () => {
        dispatch(profileActions.setReadonly(false));
    };

    const onCancelEdit = () => {
        dispatch(profileActions.cancelEdit());
    };

    const onSave = () => {
        dispatch(updateProfileData());
    };

    const handler = readonly ? onEdit : onCancelEdit;

    const buttonTheme = readonly ? ButtonTheme.OUTLINE : ButtonTheme.OUTLINE_RED;

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            <Button onClick={handler} className={cls.editBtn} theme={buttonTheme}>
                { buttonText }
            </Button>
            {!readonly && (
                <Button onClick={onSave} theme={ButtonTheme.OUTLINE}>
                    { t('Сохранить') }
                </Button>
            )}
        </div>
    );
});
