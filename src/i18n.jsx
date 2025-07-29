import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import it from './locales/it.json';

// Initialize i18next with react-i18next plugin
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',   // Ensures compatibility with i18next JSON v3 format
  resources: {
    en: { translation: en }, // English translations
    it: { translation: it }, // Italian translations
  },
  lng: 'en',                 // Default language
  fallbackLng: 'en',         // Language to fallback to if translation is missing
  interpolation: {
    escapeValue: false,      // React already escapes values to prevent XSS
  },
});

export default i18n;
