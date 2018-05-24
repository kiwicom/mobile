// @flow strict

import HotelsVocabulary from './vocabularies/Hotels';
import ManageMyBookingVocabulary from './vocabularies/ManageMyBooking';

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
const Translations = {
  ...HotelsVocabulary,
  ...ManageMyBookingVocabulary,

  'core.authentication.logging_in': 'Logging in...',
  'core.authentication.login': 'Login!',
  'core.authentication.logout': 'Logout',
  'core.authentication.email': 'Email',
  'core.authentication.password': 'Password',

  'partial_failure.error':
    'Some parts of the page may be missing due to partial server error.',

  'relay.query_renderer.no_connection':
    'No internet connection, please check your internet settings or try it later.',

  'shared.age_picker.done': 'Done',
  'shared.bar_popup.cancel': 'Cancel',
  'shared.pdf_viewer.load_failed': 'Failed to load pdf',
  'shared.web_view.no_internet_connection':
    'No internet connection, please check your internet settings or try it later.',
};

export type TranslationKeys = $Keys<typeof Translations>;
export type TranslationKeysObject = { [TranslationKeys]: string };
export default (Translations: TranslationKeysObject);
