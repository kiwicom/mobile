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

  'Hotels.Navigation.Title.AllHotels': 'Hotels',
  'Hotels.Navigation.Title.AllHotelsMap': 'Map',
  'Hotels.Navigation.Title.SingleHotel': 'Detail',
  'Hotels.Navigation.Title.SingleHotelMap': 'Map',
  'Hotels.Navigation.Title.GalleryGrid': 'Photos',
  'Hotels.Navigation.Title.Payment': 'Hotel',

  'Hotels.Map.MultipleReviews': 'Number of reviews: __numberOfReviews__',
  'Hotels.Map.NoReviews': 'No reviews',
  'Hotels.Map.Address': 'Address',
  'Hotels.Map.NoResults':
    'No results found, please try with a different filter',

  'Hotels.Gallery.Pagination': '__1_photoNumber__ of __2_totalPhotos__',

  'SingleHotel.RoomPicker.Select': 'Select',
  'SingleHotel.BookNow': 'Book Now',
  'SingleHotel.BookNow.Description':
    'Persons: __1_personCount__ · Rooms: __2_numberOfRooms__  · ',
  'SingleHotel.RoomList.Rooms': 'Rooms',
  'SingleHotel.BeddingInfo.Guests': '__numberOfGuests__  Guest(s)',
  'SingleHotel.Description.Facilities.ShowMore': 'More',
  'SingleHotel.Description.Facilities.ShowLess': 'Show less',

  'HotelsSearch.LoadMode': 'Load more...',
  'HotelsSearch.LocationButton.Placeholder': 'Where do you go?',
  'HotelsSearch.Filter.StarsPopup.Save': 'Save',
  'HotelsSearch.Filter.StarsPopup.Title': 'Hotel stars',
  'HotelsSearch.Filter.StarsPopup.Unrated': 'Unrated',
  'HotelsSearch.Filter.StarsFilter.Stars': 'stars',
  'HotelsSearch.Filter.StarsFilter.Unrated': 'unrated',
  'HotelsSearch.Filter.ScorePopup.Save': 'Save',
  'HotelsSearch.Filter.ScorePopup.Title': 'Rating:',
  'HotelsSearch.Filter.ScoreFilter.Rating': 'rating',
  'HotelsSearch.Filter.ScoreFilter.Rating.Any': 'any',
  'HotelsSearch.Filter.ScoreFilter.Rating.6': 'pleasant 6+',
  'HotelsSearch.Filter.ScoreFilter.Rating.7': 'good 7+',
  'HotelsSearch.Filter.ScoreFilter.Rating.8': 'very good 8+',
  'HotelsSearch.Filter.ScoreFilter.Rating.9': 'superb 9+',
  'HotelsSearch.Filter.PricePopup.Save': 'Save',
  'HotelsSearch.Filter.PricePopup.Title': 'Price per night:',
  'HotelsSearch.Filter.PriceFilter.Price': 'price',
  'HotelsSearch.Filter.HotelFacilitiesPopup.Save': 'Save',
  'HotelsSearch.Filter.HotelFacilitiesPopup.Title': 'Hotel facilities',
  'HotelsSearch.Filter.HotelFacilitiesFilter.Title': 'hotel facilities',
  'HotelsSearch.Filter.FreeCancellation': 'free cancellation',
  'HotelsSearch.LocationPicker.Cancel': 'Cancel',
  'HotelsSearch.LocationPicker.YourLocation': 'Confirm',
  'HotelsSearch.LocationPicker.Header': 'Where',
  'HotelsSearch.Guests.Adults': 'Adults:',
  'HotelsSearch.Guests.Children': 'Children:',
  'HotelsSearch.GuestsModal.Close': 'Close',
  'HotelsSearch.GuestsModal.Save': 'Save',
  'HotelsSearch.GuestsModal.ChildAgeTitle': 'Age of child at check-out',
  'HotelsSearch.GuestsModal.Children.ErrorAge':
    'Please fill children ages first.',
  'HotelsSearch.GuestsModal.Header': 'Guests',

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
