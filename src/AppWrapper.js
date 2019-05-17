import React from "react";
import App from "./App";
import PropTypes from "prop-types";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider, addLocaleData } from "react-intl";
import fiLocaleData from "react-intl/locale-data/fi";
import enLocaleData from "react-intl/locale-data/en";
import translations from "./i18n/locales";
import { connect } from "react-redux";

// TODO: Deprecate react-intl in favor of Fluent

addLocaleData(fiLocaleData);
addLocaleData(enLocaleData);

const AppWrapper = ({ locale }) => {
  // Fallback language is english
  const appLocale = locale || "en";
  const messages = translations[appLocale];

  return (
    <IntlProvider locale={appLocale} key={locale} messages={messages}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IntlProvider>
  );
};

AppWrapper.propTypes = {
  locale: PropTypes.string,
  currentLocales: PropTypes.any
};

const mapStateToProps = state => {
  return {
    locale: state.localization.lang
  };
};

export default connect(mapStateToProps)(AppWrapper);
