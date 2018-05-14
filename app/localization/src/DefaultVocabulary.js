// @flow strict

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

  'hotels.gallery_grid.no_images': 'No images available.',
  'hotels.gallery.pagination': '__1_photoNumber__ of __2_totalPhotos__',
  'hotels.map.address': 'Address',
  'hotels.map.multiple_reviews': 'Total reviews: __numberOfReviews__',
  'hotels.map.no_results': 'No results. Please try using a different filter.',
  'hotels.map.no_reviews': 'No reviews',
  'hotels.navigation.title.all_hotels': 'Hotels',
  'hotels.navigation.title.all_hotels_map': 'Map',
  'hotels.navigation.title.gallery_grid': 'Photos',
  'hotels.navigation.title.payment': 'Hotel',
  'hotels.navigation.title.single_hotel': 'Details',
  'hotels.navigation.title.single_hotel_map': 'Map',

  'hotels_search.all_hotels.please_search':
    'Please search for your desired destination.',
  'hotels_search.all_hotels_search_list.no_hotels_found': 'No hotels found.',
  'hotels_search.all_hotels_map.allow_localization_or_search':
    'Please go to settings and allow localization, or go back and search for your desired destination',
  'hotels_search.date_picker.select_date': 'Select date',
  'hotels_search.filter.free_cancellation': 'free cancellation',
  'hotels_search.filter.hotel_facilities_filter.title': 'amenities',
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
  'hotels_search.guests_modal.child_age_title': "Child's age at check-out",
  'hotels_search.guests_modal.children.error_age':
    "Please provide the child's age first.",
  'hotels_search.guests_modal.close': 'Close',
  'hotels_search.guests_modal.header': 'Guests',
  'hotels_search.guests_modal.save': 'Save',
  'hotels_search.load_more': 'Load more...',
  'hotels_search.location_button.placeholder': 'Where?',
  'hotels_search.location_picker.cancel': 'Cancel',
  'hotels_search.location_picker.header': 'Where',
  'hotels_search.location_picker.recent_search': 'Recent search',
  'hotels_search.location_picker.your_location': 'Confirm',

  'partial_failure.error':
    'Some parts of the page may be missing due to partial server error.',

  'relay.query_renderer.no_connection':
    'No internet connection, please check your internet settings or try it later.',

  'shared.age_picker.done': 'Done',
  'shared.bar_popup.cancel': 'Cancel',
  'shared.pdf_viewer.load_failed': 'Failed to load pdf',
  'shared.web_view.no_internet_connection':
    'No internet connection, please check your internet settings or try it later.',

  'single_hotel.bedding_info.guests': 'Guests: __numberOfGuests__',
  'single_hotel.book_now': 'Book Now',
  'single_hotel.book_now.description':
    'Guests: __1_personCount__ · Rooms: __2_numberOfRooms__  · ',
  'single_hotel.description.facilities.show_less': 'Show less',
  'single_hotel.description.facilities.show_more': 'More',
  'single_hotel.hotel_detail_screen.hotel_not_found': 'Hotel not found.',
  'single_hotel.room_badges.breakfast_included': 'Breakfast included',
  'single_hotel.room_badges.free_cancellation': 'Free cancellation',
  'single_hotel.room_list.rooms': 'Rooms',
  'single_hotel.room_picker.select': 'Select',

  // MMB package:
  'mmb.booking_state.confirmed': 'Confirmed',
  'mmb.booking_state.refunded': 'Refunded',
  'mmb.booking_state.in_process': 'In process',

  'mmb.my_bookings.title.bookings': 'Bookings',
  'mmb.my_bookings.future_trips': 'Future trips',
  'mmb.my_bookings.past_trips': 'Past trips',

  // MMB Flight services
  'mmb.flight_services.additional_baggage': 'Checked baggage',
  'mmb.flight_services.allocated_seating': 'Seat Selection',
  'mmb.flight_services.musical_equipment': 'Musical Equipment',
  'mmb.flight_services.traveling_with_pets': 'Pet Passengers',
  'mmb.flight_services.special_assistance': 'Special Assistance',
  'mmb.flight_services.sports_equipment': 'Sports Equipment',
  'mmb.flight_services.title': 'Services',

  'mmb.invoices.not_available':
    'Invoice file is not available yet. Please try it later.',

  // MMB menu:
  'mmb.main_menu.title': 'Manage my bookings',
  'mmb.flight_services': 'Flight Services',

  'mmb.main_menu.services': 'Services',
  'mmb.main_menu.services.flight_services': 'Flight Services',
  'mmb.main_menu.services.flight_services.description':
    'Wi-Fi, food, sport equipment',
  'mmb.main_menu.services.trip_services': 'Trip Services',
  'mmb.main_menu.services.trip_services.description':
    'Insurance, hotels, transfers',

  'mmb.main_menu.manage': 'Manage',
  'mmb.main_menu.manage.help': 'Help',
  'mmb.main_menu.manage.help.description': 'Contact us',
  'mmb.sub_menu.help.title': 'Support',
  'mmb.sub_menu.help.help': 'Help',
  'mmb.sub_menu.help.call_support': 'Call Support',

  'mmb.main_menu.manage.other': 'Other',
  'mmb.main_menu.manage.other.description':
    'Booking cancellation, invoice, etc',
  'mmb.sub_menu.manage.other.title': 'Others',
  'mmb.sub_menu.manage.other.invoice': 'Invoice',
  'mmb.sub_menu.manage.other.open_on_web': 'Open on Web',
  'mmb.sub_menu.manage.other.refund_form': 'Refund Form',
  'mmb.sub_menu.manage.other.apply_for_refund': 'Apply for refund',

  'mmb.trip_services.title.ordered': 'Ordered',
};

export type TranslationKeys = $Keys<typeof Translations>;
export type TranslationKeysObject = { [TranslationKeys]: string };
export default (Translations: TranslationKeysObject);
