// @flow

import idx from 'idx';
import moment from 'moment';

import { sanitizeDate } from '../GraphQLSanitizers';
import type { Coordinates } from '../CoordinatesType';
import type {
  SearchParams,
  OnChangeSearchParams,
} from '../allHotels/searchForm/SearchParametersType';

export const hasCoordinates = (coordinates: Coordinates | null): boolean => {
  const latitude = idx(coordinates, _ => _.latitude);
  const longitude = idx(coordinates, _ => _.longitude);

  return latitude != null && longitude != null;
};

export const getSearchQueryParams = (
  search: SearchParams,
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

export const updateCheckinDateIfBeforeToday = (
  search: SearchParams,
  onSearchChange: OnChangeSearchParams => void,
) => {
  if (moment(search.checkin).startOf('day') < moment().startOf('day')) {
    onSearchChange({
      ...search,
      checkin: new Date(),
      checkout: moment()
        .add(6, 'days')
        .toDate(),
    });
  }
};
