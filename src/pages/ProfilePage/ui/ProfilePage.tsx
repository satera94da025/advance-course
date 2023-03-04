import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { profileReducer } from "entities/Profile";
import {
    DynamicModuleLoader,
    ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { memo } from "react";

interface ProfilePageProps {
    className?: string
}

const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {t('Страница профиля')}
            </div>
        </DynamicModuleLoader>

    );
};

export default memo(ProfilePage);
