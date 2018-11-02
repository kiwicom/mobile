// @flow

/* eslint-env detox/detox */

import {
  goToHotelsTab,
  goToHotelSearchResults,
  goToHotelSearchResultsMap,
  goBackToHotelSearchResults,
} from './helpers';

describe('Hotel results', () => {
  it('should have welcome screen', async () => {
    await goToHotelsTab();
    await expect(element(by.id('homePage'))).toBeVisible();
  });

  it('should display hotel results', async () => {
    await goToHotelSearchResults();
    await expect(element(by.id('firstHotelResult'))).toBeVisible();
  });

  it('should be possible to view hotel results on the map', async () => {
    await goToHotelSearchResultsMap();
    await expect(element(by.id('allHotels-mapScreen'))).toBeVisible();
  });

  it('should be possible to go back to list view of hotel results', async () => {
    await goBackToHotelSearchResults();
    await expect(element(by.id('firstHotelResult'))).toBeVisible();
  });
});
