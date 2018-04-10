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
  'core.authentication.logging_in': 'Logging in...',
  'core.authentication.login': 'Login!',
  'core.authentication.logout': 'Logout',

  'hotels.gallery.pagination': '__1_photoNumber__ of __2_totalPhotos__',
  'hotels.map.address': 'Address',
  'hotels.map.multiple_reviews': 'Number of reviews: __numberOfReviews__',
  'hotels.map.no_results':
    'No results found, please try with a different filter',
  'hotels.map.no_reviews': 'No reviews',
  'hotels.navigation.title.all_hotels': 'Hotels',
  'hotels.navigation.title.all_hotels_map': 'Map',
  'hotels.navigation.title.gallery_grid': 'Photos',
  'hotels.navigation.title.payment': 'Hotel',
  'hotels.navigation.title.single_hotel': 'Detail',
  'hotels.navigation.title.single_hotel_map': 'Map',

  'hotels_search.filter.free_cancellation': 'free cancellation',
  'hotels_search.filter.hotel_facilities_filter.title': 'hotel facilities',
  'hotels_search.filter.hotel_facilities_popup.save': 'Save',
  'hotels_search.filter.hotel_facilities_popup.title': 'Hotel facilities',
  'hotels_search.filter.price_filter.price': 'price',
  'hotels_search.filter.price_popup.save': 'Save',
  'hotels_search.filter.price_popup.title': 'Price per night:',
  'hotels_search.filter.score_filter.rating': 'rating',
  'hotels_search.filter.score_filter.rating.6': 'pleasant 6+',
  'hotels_search.filter.score_filter.rating.7': 'good 7+',
  'hotels_search.filter.score_filter.rating.8': 'very good 8+',
  'hotels_search.filter.score_filter.rating.9': 'superb 9+',
  'hotels_search.filter.score_filter.rating.any': 'any',
  'hotels_search.filter.score_popup.save': 'Save',
  'hotels_search.filter.score_popup.title': 'Rating:',
  'hotels_search.filter.stars_filter.stars': 'stars',
  'hotels_search.filter.stars_filter.unrated': 'unrated',
  'hotels_search.filter.stars_popup.save': 'Save',
  'hotels_search.filter.stars_popup.title': 'Hotel stars',
  'hotels_search.filter.stars_popup.unrated': 'Unrated',
  'hotels_search.guests.adults': 'Adults:',
  'hotels_search.guests.children': 'Children:',
  'hotels_search.guests_modal.child_age_title': 'Age of child at check-out',
  'hotels_search.guests_modal.children.error_age':
    'Please fill children ages first.',
  'hotels_search.guests_modal.close': 'Close',
  'hotels_search.guests_modal.header': 'Guests',
  'hotels_search.guests_modal.save': 'Save',
  'hotels_search.load_more': 'Load more...',
  'hotels_search.location_button.placeholder': 'Where do you go?',
  'hotels_search.location_picker.cancel': 'Cancel',
  'hotels_search.location_picker.header': 'Where',
  'hotels_search.location_picker.your_location': 'Confirm',

  'partial_failure.error':
    'Some parts of the page may be missing due to partial server error.',

  'shared.age_picker.done': 'Done',
  'shared.bar_popup.cancel': 'Cancel',

  'single_hotel.bedding_info.guests': '__numberOfGuests__  Guest(s)',
  'single_hotel.book_now': 'Book Now',
  'single_hotel.book_now.description':
    'Persons: __1_personCount__ · Rooms: __2_numberOfRooms__  · ',
  'single_hotel.description.facilities.show_less': 'Show less',
  'single_hotel.description.facilities.show_more': 'More',
  'single_hotel.room_list.rooms': 'Rooms',
  'single_hotel.room_picker.select': 'Select',
};

export type TranslationKeys = $Keys<typeof Translations>;
export type TranslationKeysObject = { [TranslationKeys]: string };
export default (Translations: TranslationKeysObject);
