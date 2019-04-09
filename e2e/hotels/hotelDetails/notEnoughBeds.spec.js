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

describe('Hotel detail - Not enough beds warning', () => {
  it('should show an alert when there are not enough beds for all guests', async () => {
    await goToHotelsTab();
    await expect(element(by.id('adultsIncrement'))).toBeVisible();

    for (let i = 0; i < 19; i++) {
      await element(by.id('adultsIncrement')).tap(); // eslint-disable-line no-await-in-loop
    }

    await goToHotelSearchResults();
    await goToFirstHotelDetails();
    await scrollToBottomOfHotelDetails();
    await selectLastRoom();
    await pressBookNow();

    await expect(
      element(
        by.label("Thats's fine").and(by.type('_UIAlertControllerActionView')),
      ),
    ).toBeVisible();
  });
});
