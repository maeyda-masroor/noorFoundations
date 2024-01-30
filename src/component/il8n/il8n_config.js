// src/i18n/i18n-config.js

// We'll use the English-USA locale when
// our app loads. It will also be used as
// a fallback when there's a missing
// translation in another locale.
export const defaultLocale = "en-US";

// The locales our app supports. We'll work
// with English-USA and Arabic-Egypt here.
// Feel free to add any locales you want.
export const locales = {
  // English translation message dictionary.
  "en-US": {
    // "x.y" is just a convention for keys, but
    // any string will do here.
    "app.title": "Yomtaba",
    "app.tagline": "recipe of the day",
  },
  // Arabic translation message dictionary.
  "ar-EG": {
    // Note that a message has to use the
    // same ID/key across locales.
    "app.title": "يومباتا",
    "app.tagline": "وصفة اليوم",
  },
};