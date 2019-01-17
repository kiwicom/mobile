// @flow

import { DateFormatter } from '@kiwicom/mobile-localization';

export const sanitizeDate = (input: ?Date): ?string => {
  return input && DateFormatter(input).formatForMachine();
};

export const sanitizeHotelAmenities = (hotelAmenities: string[]) => {
  return hotelAmenities.length
    ? hotelAmenities.reduce((amenities, amenity) => {
        amenities[amenity] = true;
        return amenities;
      }, {})
    : null;
};
