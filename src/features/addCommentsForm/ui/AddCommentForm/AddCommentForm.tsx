import {
    memo, useCallback,
} from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import {
    useAppDispatch,
} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
    DynamicModuleLoader, ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { getAddCommentFormError, getAddCommentFormText } from "../../model/selectors/addCommentFormSelectors";
import { addCommentFormActions, addCommentFormReducer } from "../../model/slices/addCommentFormSlice";
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string
    onSendComment: (text: string) => void
}

const reducers: ReducerList = {
    addCommentForm: addCommentFormReducer,
};
const AddCommentForm = ({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();
    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    onChange={onCommentTextChange}
                    value={text}
                    placeholder={t('Введите текст комментария')}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                >
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>

    );
};

export default memo(AddCommentForm);
