import React from 'react';
import { useTranslation } from 'react-i18next';

const SuperPage = () => {
  const [t] = useTranslation();
  return <div>{t('SUPER_PAGE')}</div>;
};

export default SuperPage;
