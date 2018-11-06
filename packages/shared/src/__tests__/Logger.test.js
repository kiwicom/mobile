// @flow

import { NativeModules } from 'react-native';

import Logger from '../Logger';

describe('Logger', () => {
  it('should call RnLoggingModule ancillaryDisplayed', () => {
    expect(
      Logger.ancillaryDisplayed(
        Logger.Type.ANCILLARY_STEP_DETAILS,
        Logger.Provider.ANCILLARY_PROVIDER_BOOKINGCOM,
      ),
    ).toBeUndefined();

    expect(NativeModules.RNLoggingModule.ancillaryDisplayed).toBeCalledWith(
      Logger.Type.ANCILLARY_STEP_DETAILS,
      Logger.Provider.ANCILLARY_PROVIDER_BOOKINGCOM,
    );
  });

  it('should call RnLoggingModule ancillaryPurchased', () => {
    expect(
      Logger.ancillaryPurchased(
        Logger.Type.ANCILLARY_STEP_PAYMENT,
        Logger.Provider.ANCILLARY_PROVIDER_BOOKINGCOM,
      ),
    ).toBeUndefined();

    expect(NativeModules.RNLoggingModule.ancillaryPurchased).toBeCalledWith(
      Logger.Type.ANCILLARY_STEP_PAYMENT,
      Logger.Provider.ANCILLARY_PROVIDER_BOOKINGCOM,
    );
  });
});
