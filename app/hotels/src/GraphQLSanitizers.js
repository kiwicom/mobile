// @flow

import moment from 'moment';

export const sanitizeDate = (input: ?Date): ?string =>
  input && moment(input).format('YYYY-MM-DD');

export const sanitizeHotelFacilities = (hotelFacilities: string[]) =>
  hotelFacilities.length
    ? hotelFacilities.reduce((facilities, facility) => {
        facilities[facility] = true;
        return facilities;
      }, {})
    : null;
