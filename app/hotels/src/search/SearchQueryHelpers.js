// @flow

import idx from 'idx';

import type { Coordinates } from '../CoordinatesType';
import { sanitizeDate } from '../GraphQLSanitizers';

export const hasCoordinates = (coordinates: Coordinates | null): boolean => {
  const latitude = idx(coordinates, _ => _.latitude);
  const longitude = idx(coordinates, _ => _.longitude);

  return latitude != null && longitude != null;
};

export const getSearchQueryParams = (
  search: Object,
  coordinates: Coordinates | null,
  cityId: string | null,
  location: string,
): Object => {
  let params = {
    ...search,
    checkin: sanitizeDate(search.checkin),
    checkout: sanitizeDate(search.checkout),
  };

  /**
   * If location is not equal to '' then user is searching
   * and we should ignore coordinates
   */
  if (hasCoordinates(coordinates) && location === '') {
    params.latitude = idx(coordinates, _ => _.latitude);
    params.longitude = idx(coordinates, _ => _.longitude);
  } else if (cityId) {
    params.cityId = cityId;
  }

  return params;
};
