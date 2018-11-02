// @flow

/* eslint-env detox/detox */

import {
  goToHotelsTab,
  goToHotelSearchResults,
  goToFirstHotelDetails,
  scrollToBottomOfHotelDetails,
  selectLastRoom,
  pressBookNow,
} from '../helpers';

describe('Hotel details - Booking a room', () => {
  it('should show hotel details', async () => {
    await goToHotelsTab();
    await goToHotelSearchResults();
    await goToFirstHotelDetails();
    await expect(element(by.id('hotelDetailScrollView'))).toExist();
    await expect(element(by.id('lastAvailableRoom'))).toExist();
  });

  it('should be possible to select the last room on the page', async () => {
    await scrollToBottomOfHotelDetails();
    await expect(element(by.id('lastAvailableRoom'))).toBeVisible();
  });

  it('should be possible to book a room after it is selected', async () => {
    await selectLastRoom();
    await expect(element(by.id('bookNowButton'))).toBeVisible();
  });

  it('should go to payment screen when booking a room', async () => {
    await pressBookNow();
    await expect(element(by.id('paymentScreenSingleHotel'))).toExist();
  });
});
