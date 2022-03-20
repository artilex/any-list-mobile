import i18n, {Module} from 'i18next';
import {initReactI18next} from 'react-i18next';
import enTranslations from '../assets/translations/en.json';
import ruTranslations from '../assets/translations/ru.json';

interface DetectorModule extends Module {
  async: boolean;
  detect: (arg: Function) => void;
  init: () => void;
  cacheUserLanguage: () => void;
}
const languageDetector: DetectorModule = {
  type: 'languageDetector',
  async: true,
  detect: async cb => {
    // TODO: Implement this detector with Async Storage
    const locale = 'en';
    cb(locale);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: enTranslations,
      },
      ru: {
        translation: ruTranslations,
      },
    },
  });

export default i18n;
