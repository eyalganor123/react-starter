import React from 'react';
import { useTranslation } from 'react-i18next';

const ShitPage = () => {
  const [t] = useTranslation();
  return <div>{t('SHIT_PAGE')}</div>;
};

export default ShitPage;
