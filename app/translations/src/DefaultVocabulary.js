// @flow

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
  'PartialFailure.Error':
    'Some parts of the page may be missing due to partial server error.',

  'Homepage.Hotels': 'Hotels',
  'Homepage.HotelsOslo': 'Hotels in Oslo',
  'Homepage.HotelsLima': 'Hotels in Lima',
  'Homepage.LocationPicker': 'Location picker',

  'Hotels.Map.NoReviews': 'No reviews',

  'SingleHotel.RoomPicker.Select': 'Select',
  'SingleHotel.BookNow': 'Book Now',
  'SingleHotel.BookNow.Description':
    'Persons: __1_personCount__ · Rooms: __2_numberOfRooms__  · ',
  'SingleHotel.RoomList.Rooms': 'Rooms',

  'HotelsSearch.LoadMode': 'Load more...',
  'HotelsSearch.Filter.StarsPopup.Save': 'Save',
  'HotelsSearch.Filter.StarsFilter.Stars': 'stars',
  'HotelsSearch.Filter.StarsFilter.Unrated': 'unrated',
  'HotelsSearch.Filter.ScorePopup.Save': 'Save',
  'HotelsSearch.Filter.ScoreFilter.Rating': 'rating',
  'HotelsSearch.Filter.ScoreFilter.Rating.Any': 'any',
  'HotelsSearch.Filter.ScoreFilter.Rating.6': 'pleasant 6+',
  'HotelsSearch.Filter.ScoreFilter.Rating.7': 'good 7+',
  'HotelsSearch.Filter.ScoreFilter.Rating.8': 'very good 8+',
  'HotelsSearch.Filter.ScoreFilter.Rating.9': 'superb 9+',
  'HotelsSearch.Filter.PricePopup.Save': 'Save',
  'HotelsSearch.Filter.PriceFilter.Price': 'price',
  'HotelsSearch.Filter.HotelFacilitiesPopup.Save': 'Save',
  'HotelsSearch.Filter.HotelFacilitiesFilter.Title': 'hotel facilities',
  'HotelsSearch.Filter.GuestsPopup.Save': 'Save',
  'HotelsSearch.Filter.GuestsPopup.Children.ErrorAge':
    'Please fill children ages first.',
  'HotelsSearch.Filter.FreeCancellation': 'free cancellation',

  // shared component
  'Shared.AgePicker.Done': 'Done',
  'Shared.BarPopup.Cancel': 'Cancel',

  'Core.Authentication.Logout': 'Logout',
  'Core.Authentication.Login': 'Login!',
  'Core.Authentication.LoggingIn': 'Logging in...',
};

export type TranslationKeys = $Keys<typeof Translations>;
export type TranslationKeysObject = { [TranslationKeys]: string };
export default (Translations: TranslationKeysObject);
