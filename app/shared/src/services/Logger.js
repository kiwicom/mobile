// @flow

import { NativeModules } from 'react-native';

const LoggingModule = NativeModules.RNLoggingModule;

const {
  ANCILLARY_STEP_DETAILS,
  ANCILLARY_STEP_PAYMENT,
  ANCILLARY_STEP_RESULTS,
  ANCILLARY_STEP_SEARCH_FORM,
} = LoggingModule;

const Type = {
  ANCILLARY_STEP_DETAILS,
  ANCILLARY_STEP_PAYMENT,
  ANCILLARY_STEP_RESULTS,
  ANCILLARY_STEP_SEARCH_FORM,
};

type LogType = $Keys<typeof Type>;

function ancillaryDisplayed(type: LogType) {
  // second paramater will be removed in the future
  LoggingModule.ancillaryDisplayed(type, false);
}

function ancillaryPurchased(type: LogType) {
  // second paramater will be removed in the future
  LoggingModule.ancillaryPurchased(type, false);
}

export default {
  Type,
  ancillaryDisplayed,
  ancillaryPurchased,
};
