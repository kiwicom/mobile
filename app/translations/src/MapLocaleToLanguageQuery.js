// @flow

import idx from 'idx';

// Copied from grahpql.schema
const languages = [
  'ar',
  'bg',
  'ca',
  'cs',
  'da',
  'de',
  'el',
  'en',
  'engb',
  'enus',
  'es',
  'esar',
  'et',
  'fi',
  'fr',
  'he',
  'hr',
  'hu',
  'id',
  'is',
  'it',
  'ja',
  'ko',
  'lt',
  'lv',
  'ms',
  'nl',
  'no',
  'pl',
  'pt',
  'ptbr',
  'ptpt',
  'ro',
  'ru',
  'sk',
  'sl',
  'sr',
  'sv',
  'th',
  'tl',
  'tr',
  'uk',
  'vi',
  'zh',
  'zhcn',
  'zhtw',
];

export default (locale: string) => {
  // We get from native something like es-ES which is language and region
  const userLanguage = idx(locale.toLowerCase().split('-'), _ => _[0]) || '';
  if (userLanguage === 'nb') {
    // norwegian locale returns nb, but language code for booking is no
    return 'no';
  }
  const bookingLanguageCode = languages.find(
    language => language === userLanguage,
  );
  // Use english as default booking.com query language
  return bookingLanguageCode || 'en';
};
