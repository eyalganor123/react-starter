import React from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';

import App from './features/pages/app/app.page.jsx';
import DefaultLayout from './features/pages/default-layout/default-layout.page.jsx';
import i18n from './i18n';
import HomePage from './features/pages/home/home.page.jsx';
import AboutPage from './features/pages/about/about.page.jsx';
import ShitPage from './features/pages/shit/shit.jsx';
import SuperPage from './features/pages/super/super.jsx';
import Form from './features/pages/form/form.jsx';
import { ROUTES } from './common/constants';
import DefaultTheme from './assets/themes/default';

const Root = ({ store }) => ({
  render () {
    return (
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <ThemeProvider theme={DefaultTheme}>
            <Router>
              <App>
                <Switch>
                  <DefaultLayout path={ROUTES.home} component={HomePage} />
                  <DefaultLayout path={ROUTES.about} component={AboutPage} />
                  <DefaultLayout path={ROUTES.shit} component={ShitPage} />
                  <DefaultLayout path={ROUTES.super} component={SuperPage} />
                  <DefaultLayout path={ROUTES.form} component={Form} />
                </Switch>
              </App>
            </Router>
          </ThemeProvider>
        </Provider>
      </I18nextProvider>
    );
  }
});

export default Root;
