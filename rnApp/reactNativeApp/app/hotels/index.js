// @flow

import { injectAsyncReducer, store } from '@kiwicom/react-native-app-redux';

import HotelsReducer from './src/HotelsReducer';

injectAsyncReducer(store, 'hotels', HotelsReducer);

/**
 * Main component with all hotels, and search form.
 */
export { default as AllHotels } from './src/allHotels/AllHotels';

/**
 * Map of all hotels with search filters. This is basically different
 * (more visual) representation of main search component.
 */
export { default as AllHotelsMap } from './src/map/AllHotelsMap';

/**
 * Single hotel view with all the details and "call to action" for booking.
 */
export { default as SingleHotel } from './src/singleHotel';

/**
 * All photos of the hotel with possibility to view single photo.
 */
export { default as GalleryGrid } from './src/gallery/GalleryGrid';

/**
 * Payment "web view" page. Should be opened in "modal" mode.
 */
export { default as Payment } from './src/singleHotel/PaymentScreen';
