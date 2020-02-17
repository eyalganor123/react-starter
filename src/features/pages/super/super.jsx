import React from 'react';
import { useTranslation } from 'react-i18next';

const SuperPage = () => {
    const [t] = useTranslation();
    return (
        <div>
        <div>{t('SUPER_PAGE')}</div>
        </div>
    );
};

export default SuperPage;
