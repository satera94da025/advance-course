import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { profileReducer } from "entities/Profile";
import {
    DynamicModuleLoader,
    ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

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
                {t('PROFILE PAGE')}
            </div>
        </DynamicModuleLoader>

    );
};

export default ProfilePage;
