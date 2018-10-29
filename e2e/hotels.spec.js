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

  it('should be possible to see the results on the map', async () => {
    await element(by.id('hotelsTab')).tap();
    await expect(element(by.id('homePage'))).toBeVisible();
    await element(by.id('homePage__Hotels-button')).tap();
    await expect(element(by.id('firstHotelResult'))).toBeVisible();
    await expect(element(by.id('map-header-button'))).toBeVisible();
    await element(by.id('map-header-button')).tap();
    await expect(element(by.id('allHotels-mapScreen'))).toBeVisible();
  });

  it('should be possible to open the image gallery for specific hotel', async () => {
    await element(by.id('hotelsTab')).tap();
    await expect(element(by.id('homePage'))).toBeVisible();
    await element(by.id('homePage__Hotels-button')).tap();
    await expect(element(by.id('firstHotelResult'))).toBeVisible();
    await element(by.id('firstHotelResult')).tap();
    await expect(element(by.id('hotel-openGallery'))).toBeVisible();
    await element(by.id('hotel-openGallery')).tap();
    await expect(element(by.id('galleryGrid'))).toBeVisible();
  });
});
