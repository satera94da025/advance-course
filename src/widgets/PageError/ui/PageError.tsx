import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string
  error?: Error
}

export const PageError = ({ className, error }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => window.location.reload();
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1>{t('Что то пошло не так')}</h1>
            <textarea value={error?.toString()} onChange={(e) => { console.log(e); }} />
            <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </div>
    );
};
