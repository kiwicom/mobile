// @flow

/* eslint-env detox/detox */

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await element(by.id('hotelsTab')).tap();
    await expect(element(by.id('homePage'))).toBeVisible();
  });
});
