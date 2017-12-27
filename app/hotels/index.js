// @flow

/**
 * Main component with all hotels, and search form.
 */
export { default as AllHotels } from './src/allHotels/AllHotels';

/**
 * Map of all hotels with search filters. This is basically different
 * (more visual) representation of main search component.
 */
export { default as AllHotelsMap } from './src/map';

/**
 * Single hotel view with all the details and "call to action" for booking.
 */
export { default as SingleHotel } from './src/singleHotel';

/**
 * All photos of the hotel with possibility to view single photo.
 */
export { default as GalleryGrid } from './src/gallery/GalleryGrid';
