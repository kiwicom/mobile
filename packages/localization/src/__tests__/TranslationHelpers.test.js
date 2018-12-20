// @flow strict

import { getTranslation } from '../TranslationHelpers';

const vocabulary = {
  'single_hotel.hotel_review.reviews': '__count__ Reviews',
  'hotels.gallery.pagination': '__1_photoNumber__ of __2_totalPhotos__',
};

describe('getTranslation:', () => {
  it('returns default translation if string is not translated', () => {
    const translationId = 'single_hotel.hotel_review.reviews';
    const notTranslatedKey = 'mobile.single_hotel.hotel_review.reviews';
    expect(getTranslation(notTranslatedKey, translationId, vocabulary)).toBe(
      '__count__ Reviews',
    );
  });

  it('returns translation id if translated string is null/undefined', () => {
    const translationId = 'single_hotel.hotel_review.reviews';
    const notTranslatedKey = null;
    expect(getTranslation(notTranslatedKey, translationId, vocabulary)).toBe(
      translationId,
    );
  });

  it('handles natively translated strings -- with one parameter', () => {
    const translationId = 'single_hotel.hotel_review.reviews';
    const translatedString = '%1$@ Reviews';
    expect(getTranslation(translatedString, translationId, vocabulary)).toBe(
      '__count__ Reviews',
    );
  });

  it('handles natively translated strings -- with several parameters', () => {
    const translationId = 'hotels.gallery.pagination';
    const translatedString = '%1$@ of %2$@';
    expect(getTranslation(translatedString, translationId, vocabulary)).toBe(
      '__1_photoNumber__ of __2_totalPhotos__',
    );
  });

  it('returns translated string if parameter matching is not possible', () => {
    const translationId = 'hotels.gallery.pagination';
    const translatedString = '%1$@ of %2$@';
    const mistake = ' and MISTAKE %3$@';
    expect(
      getTranslation(translatedString + mistake, translationId, vocabulary),
    ).toBe(translatedString + mistake);
  });
});
