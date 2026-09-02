import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./locales/es.json";
import en from "./locales/en.json";

import type { LocalesType } from "./locales.type";
import type { TranslationsType } from "./translations.type";

const resources: Record<LocalesType, TranslationsType> = {
  es,
  en,
};

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: "es",
      fallbackLng: "es",
      interpolation: {
        escapeValue: false
      }
    });
}

export default i18n;
