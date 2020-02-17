import React from 'react';
import { useTranslation } from 'react-i18next';

const SuperPage = () => {
  const [t] = useTranslation();
  const test = 123;
  return <div>{t('SUPER_PAGE')}</div>;
};

export default SuperPage;
