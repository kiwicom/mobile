// @flow

import { NativeModules } from 'react-native';

NativeModules.RNLoggingModule = {
  ancillaryDisplayed: jest.fn(),
  ancillaryPurchased: jest.fn(),
  hotelsResultsDisplayed: jest.fn(),
  hotelsSelectedFilterTag: jest.fn(),
  hotelsDetailOpened: jest.fn(),
  hotelsDetailAbandoned: jest.fn(),
  hotelsDetailDescriptionExpanded: jest.fn(),
  hotelsDetailMapOpened: jest.fn(),
  hotelsDetailRoomSelected: jest.fn(),
  hotelsGalleryOpened: jest.fn(),
  hotelsBookNowPressed: jest.fn(),
  ANCILLARY_STEP_DETAILS: 'ANCILLARY_STEP_DETAILS',
  ANCILLARY_STEP_PAYMENT: 'ANCILLARY_STEP_PAYMENT',
  ANCILLARY_STEP_RESULTS: 'ANCILLARY_STEP_RESULTS',
  ANCILLARY_STEP_SEARCH_FORM: 'ANCILLARY_STEP_SEARCH_FORM',
  ANCILLARY_PROVIDER_BOOKINGCOM: 'ANCILLARY_PROVIDER_BOOKINGCOM',
  ANCILLARY_PROVIDER_STAY22: 'ANCILLARY_PROVIDER_STAY22',
  HOTELS_GALLERY_TYPE_HOTEL: 'HOTELS_GALLERY_TYPE_HOTEL',
  HOTELS_GALLERY_TYPE_ROOM: 'HOTELS_GALLERY_TYPE_ROOM',
};
