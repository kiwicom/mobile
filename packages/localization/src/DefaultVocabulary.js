// @flow strict

import HotelsVocabulary from './vocabularies/Hotels';
import ManageMyBookingVocabulary from './vocabularies/ManageMyBooking';
import FastTrackVocabulary from './vocabularies/FastTrack';

/**
 * This is just a dummy vocabulary used for development. It should be in
 * the following format:
 *
 * `mobile.screen.component.(title, text, subtitle, ...).shortened_text_content`
 *
 * Check these examples:
 *
 * ```text
 * mobile.landing_page.maw.title.youre_traveling   (You're traveling soon)
 * mobile.affil.lounges.header                     (Lounge access)
 * mobile.booking.billing.company_name             (Kiwi.com)
 * mobile.notifications.not_logged                 (You have to be logged in to open notification detail)
 * ```
 *
 * If some value has parameter use `__parameter`__ for that. Multiple
 * parameters should be prefixed with their number like this:
 *
 * ```
 * Your flight __number__ departs now.
 * Your flight __1_number__ departs from __2_airport__ gate __3_gate__.
 * ```
 *
 * TODO: better parameters structure (native code is not replacing it anyway)
 */

const CoreVocabulary = {
  'core.authentication.logging_in': 'Logging in...',
  'core.authentication.login': 'Login!',
  'core.authentication.logout': 'Logout',
  'core.authentication.email': 'Email',
  'core.authentication.password': 'Password',
};

const SharedVocabulary = {
  'relay.query_renderer.no_connection':
    'No internet connection, please check your internet settings or try it later.',
  'relay.query_renderer.timeout':
    'The response from the server timed out. Please try again.',

  'shared.age_picker.done': 'Done',
  'shared.bar_popup.cancel': 'Cancel',
  'shared.button.close': 'Close',
  'shared.button.save': 'Save',
  'shared.button.cancel': 'Cancel',
  'shared.web_view.no_internet_connection':
    'No internet connection, please check your internet settings or try it later.',
  'shared.hours_short': 'h',
  'shared.minutes_short': 'm',
  'shared.offline_screen.offline_title': "Looks like you're offline",
  'shared_offline_screen.offline_text':
    "Bummer. Make sure you're connected to the internet and try again",
  'shared_offline_screen.try_again': 'Try again',
};

const Translations = {
  ...CoreVocabulary,
  ...HotelsVocabulary,
  ...ManageMyBookingVocabulary,
  ...SharedVocabulary,
  ...FastTrackVocabulary,
};

export type TranslationKeys = $Keys<typeof Translations>;
export type TranslationKeysObject = { [TranslationKeys]: string };
export default (Translations: TranslationKeysObject);

export type TranslationPackages =
  | 'HotelsVocabulary'
  | 'ManageMyBookingVocabulary'
  | 'SharedVocabulary'
  | 'CoreVocabulary'
  | 'FastTrackVocabulary';

export const getVocabularies = (vocabularies: TranslationPackages[]) => {
  const translationPackages = {
    HotelsVocabulary,
    ManageMyBookingVocabulary,
    SharedVocabulary,
    CoreVocabulary,
    FastTrackVocabulary,
  };
  return vocabularies.reduce((acc, curr) => {
    return {
      ...acc,
      ...translationPackages[curr],
    };
  }, {});
};
