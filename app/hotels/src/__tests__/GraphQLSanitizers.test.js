// @flow

import { sanitizeDate, sanitizeHotelAmenities } from '../GraphQLSanitizers';

describe('sanitizeDate', () => {
  it('Formats Date object into a ISO date string', () => {
    expect(sanitizeDate(new Date('2018-01-24T12:00:00.000Z'))).toBe(
      '2018-01-24',
    );
  });

  it('Returns null for an empty value', () => {
    expect(sanitizeDate(null)).toBeNull();
  });
});

describe('sanitizeHotelAmenities', () => {
  it('Format facilities to string', () => {
    expect(sanitizeHotelAmenities(['spa', 'wifi'])).toEqual({
      spa: true,
      wifi: true,
    });
  });

  it('Returns null for an empty value', () => {
    expect(sanitizeHotelAmenities([])).toBeNull();
  });
});
