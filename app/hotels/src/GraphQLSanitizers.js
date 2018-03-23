// @flow

import { DateFormatter } from '@kiwicom/react-native-app-translations';

export const sanitizeDate = (input: ?Date): ?string =>
  input && DateFormatter(input).format('YYYY-MM-DD');

export const sanitizeHotelFacilities = (hotelFacilities: string[]) =>
  hotelFacilities.length
    ? hotelFacilities.reduce((facilities, facility) => {
        facilities[facility] = true;
        return facilities;
      }, {})
    : null;
