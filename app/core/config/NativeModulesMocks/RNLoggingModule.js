// @flow

import { NativeModules } from 'react-native';

NativeModules.RNLoggingModule = {
  ancillaryDisplayed: jest.fn(),
  ancillaryPurchased: jest.fn(),
  ANCILLARY_STEP_DETAILS: 'ANCILLARY_STEP_DETAILS',
  ANCILLARY_STEP_PAYMENT: 'ANCILLARY_STEP_PAYMENT',
  ANCILLARY_STEP_RESULTS: 'ANCILLARY_STEP_RESULTS',
  ANCILLARY_STEP_SEARCH_FORM: 'ANCILLARY_STEP_SEARCH_FORM',
};
