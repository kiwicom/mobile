// @flow

/* eslint-env detox/detox */

import {
  goToHotelsTab,
  goToHotelSearchResults,
  goToFirstHotelDetails,
  openGallery,
  pressFirstGalleryImageTile,
  swipeFirstPhotosStripeImageLeft,
} from '../helpers';

describe('Hotel details - Image Gallery', () => {
  it('should be possible to open the image gallery for specific hotel', async () => {
    await goToHotelsTab();
    await goToHotelSearchResults();
    await goToFirstHotelDetails();
    await expect(element(by.id('hotel-openGallery'))).toBeVisible();
  });

  it('should be possible to see the gallery grid when opening it', async () => {
    await openGallery();
    await expect(element(by.id('galleryGrid'))).toBeVisible();
  });

  it('should be possible to press on an image tile and see that image in a modal', async () => {
    await pressFirstGalleryImageTile();
    await expect(element(by.id('galleryModal'))).toBeVisible();
    await expect(element(by.id('photosStripe'))).toBeVisible();
    await expect(element(by.id('photosStripeImage-0'))).toBeVisible();
  });

  it('should be possible to swipe left to see the second image in the modal', async () => {
    await swipeFirstPhotosStripeImageLeft();
    await expect(element(by.id('photosStripeImage-1'))).toBeVisible();
  });

  it('should display the same image after device rotation', async () => {
    // This test might fail depending on your emulator. If you run on an emulator
    // that has width >= 668 after rotating, the test will fail
    // TODO: Figure out how to run on tablet only
    await device.setOrientation('landscape');
    await expect(element(by.id('photosStripeImage-1'))).toBeVisible();
    await device.setOrientation('portrait');
    await expect(element(by.id('photosStripeImage-1'))).toBeVisible();
  });

  it('should be possible to swipe right to see first image in the modal again', async () => {
    // This test might fail depending on your emulator. If you run on an emulator
    // that has width >= 668 after rotating, the test will fail
    // TODO: Figure out how to run on tablet only
    await element(by.id('photosStripe')).swipe('right');
    await expect(element(by.id('photosStripeImage-0'))).toBeVisible();
  });
});
