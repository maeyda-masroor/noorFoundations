import { IntlProvider } from "react-intl";
import { defaultLocale, locales } from "./il8n_config";
import { useState } from "react";
import { LocaleContext } from "./LocaleContext";

export default function i18n(props){
    return (
    <IntlProvider 
      locale={defaultLocale}
      defaultLocale={defaultLocale}
      messages={locales[defaultLocale]}
    >
      {props.children}
    </IntlProvider>
);
    }

