// @flow

import { NativeModules } from 'react-native';

const LoggingModule = NativeModules.RNLoggingModule;

const {
  ANCILLARY_STEP_DETAILS,
  ANCILLARY_STEP_PAYMENT,
  ANCILLARY_STEP_RESULTS,
  ANCILLARY_STEP_SEARCH_FORM,
  ANCILLARY_PROVIDER_BOOKINGCOM,
  ANCILLARY_PROVIDER_STAY22,
  HOTELS_GALLERY_TYPE_HOTEL,
  HOTELS_GALLERY_TYPE_ROOM,
} = LoggingModule;

const Type = {
  ANCILLARY_STEP_DETAILS,
  ANCILLARY_STEP_PAYMENT,
  ANCILLARY_STEP_RESULTS,
  ANCILLARY_STEP_SEARCH_FORM,
};

const Provider = {
  ANCILLARY_PROVIDER_BOOKINGCOM,
  ANCILLARY_PROVIDER_STAY22,
};

type LogType = $Keys<typeof Type>;
type LogProvider = $Keys<typeof Provider>;

function ancillaryDisplayed(type: LogType, provider: LogProvider) {
  LoggingModule.ancillaryDisplayed(type, provider);
}

function ancillaryPurchased(type: LogType, provider: LogProvider) {
  LoggingModule.ancillaryPurchased(type, provider);
}

function hotelsResultsDisplayed(searchQuery: ?string, params: ?string) {
  LoggingModule.hotelsResultsDisplayed(searchQuery, params);
}

function hotelsFilterTagSet(filterTag: string) {
  LoggingModule.hotelsFilterTagSet(filterTag);
}

function hotelsDetailOpened() {
  LoggingModule.hotelsDetailOpened();
}

function hotelsDetailAbandoned() {
  LoggingModule.hotelsDetailAbandoned();
}

function hotelsDetailDescriptionExpanded() {
  LoggingModule.hotelsDetailDescriptionExpanded();
}

function hotelsDetailMapOpened() {
  LoggingModule.hotelsDetailMapOpened();
}

function hotelsDetailRoomSelected(hotelId: string, roomType: string) {
  LoggingModule.hotelsDetailRoomSelected(hotelId, roomType);
}

const HotelGalleryType = {
  HOTELS_GALLERY_TYPE_HOTEL,
  HOTELS_GALLERY_TYPE_ROOM,
};

type LogHotelGalleryType = $Keys<typeof HotelGalleryType>;

function hotelsGalleryOpened(type: LogHotelGalleryType) {
  LoggingModule.hotelsGalleryOpened(type);
}

function hotelsBookNowPressed(
  hotelID: string,
  rooms: number,
  guests: number,
  price: number,
  formattedPrice: string,
) {
  LoggingModule.hotelsBookNowPressed(
    hotelID,
    rooms,
    guests,
    price,
    formattedPrice,
  );
}

export default {
  Type,
  Provider,
  HotelGalleryType,
  ancillaryDisplayed,
  ancillaryPurchased,
  hotelsGalleryOpened,
  hotelsResultsDisplayed,
  hotelsFilterTagSet,
  hotelsDetailOpened,
  hotelsDetailAbandoned,
  hotelsDetailDescriptionExpanded,
  hotelsDetailMapOpened,
  hotelsDetailRoomSelected,
  hotelsBookNowPressed,
};
