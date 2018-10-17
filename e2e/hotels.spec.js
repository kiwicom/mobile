// @flow

/* eslint-env detox/detox */

describe('Hotels', () => {
  beforeEach(async () => {
    await device.launchApp({
      newInstance: true,
      permissions: { location: 'always' },
    });
  });

  it('should have welcome screen', async () => {
    await element(by.id('hotelsTab')).tap();
    await expect(element(by.id('homePage'))).toBeVisible();
  });

  it('should go to payment screen when booking a room', async () => {
    await element(by.id('hotelsTab')).tap();
    await expect(element(by.id('homePage'))).toBeVisible();
    await element(by.id('homePage__Hotels-button')).tap();
    await expect(element(by.id('firstHotelResult'))).toBeVisible();
    await element(by.id('firstHotelResult')).tap();
    await expect(element(by.id('hotelDetailScrollView'))).toExist();
    await expect(element(by.id('lastAvailableRoom'))).toExist();
    await element(by.id('hotelDetailScrollView')).scrollTo('bottom');
    await expect(element(by.id('lastAvailableRoom'))).toBeVisible();
    await element(by.id('lastAvailableRoom')).tap();
    await expect(element(by.id('bookNowButton'))).toBeVisible();
    await element(by.id('bookNowButton')).tap();
    await expect(element(by.id('paymentScreenSingleHotel'))).toExist();
  });
});
