// @flow

import { DateFormatter } from '@kiwicom/mobile-localization';

export const sanitizeDate = (input: ?Date): ?string => {
  return input && DateFormatter(input).formatForMachine();
};

export const sanitizeHotelFacilities = (hotelFacilities: string[]) => {
  return hotelFacilities.length
    ? hotelFacilities.reduce((facilities, facility) => {
        facilities[facility] = true;
        return facilities;
      }, {})
    : null;
};
