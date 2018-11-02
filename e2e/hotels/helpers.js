// @flow

/* eslint-env detox/detox */

export async function goToHotelsTab() {
  await expect(element(by.id('hotelsTab'))).toBeVisible();
  await element(by.id('hotelsTab')).tap();
}

export async function goToHotelSearchResults() {
  await expect(element(by.id('homePage__Hotels-button'))).toBeVisible();
  await element(by.id('homePage__Hotels-button')).tap();
}

export async function goToHotelSearchResultsMap() {
  await expect(element(by.id('firstHotelResult'))).toBeVisible();
  await expect(element(by.id('map-header-button'))).toBeVisible();
  await element(by.id('map-header-button')).tap();
}

export async function goBackToHotelSearchResults() {
  await expect(element(by.id('allHotels-mapScreen'))).toBeVisible();
  await expect(element(by.id('map-header-button'))).toBeVisible();
  await element(by.id('map-header-button')).tap();
}

export async function goToFirstHotelDetails() {
  await expect(element(by.id('firstHotelResult'))).toBeVisible();
  await element(by.id('firstHotelResult')).tap();
}

export async function scrollToBottomOfHotelDetails() {
  await expect(element(by.id('hotelDetailScrollView'))).toBeVisible();
  await element(by.id('hotelDetailScrollView')).scrollTo('bottom');
}

export async function selectLastRoom() {
  await expect(element(by.id('lastAvailableRoom'))).toBeVisible();
  await element(by.id('lastAvailableRoom')).tap();
}

export async function pressBookNow() {
  await expect(element(by.id('bookNowButton'))).toBeVisible();
  await element(by.id('bookNowButton')).tap();
}

export async function openGallery() {
  await expect(element(by.id('hotel-openGallery'))).toBeVisible();
  await element(by.id('hotel-openGallery')).tap();
}

export async function pressFirstGalleryImageTile() {
  await expect(element(by.id('galleryGridTile-0'))).toBeVisible();
  await element(by.id('galleryGridTile-0')).tap();
}

export async function swipeFirstPhotosStripeImageLeft() {
  await expect(element(by.id('photosStripe'))).toBeVisible();
  await expect(element(by.id('photosStripeImage-0'))).toBeVisible();
  await element(by.id('photosStripe')).swipe('left');
}
