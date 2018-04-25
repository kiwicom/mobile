// @flow

import idx from 'idx';
import { DateFormatter } from '@kiwicom/mobile-localization';

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
  let params: Object = {
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

export const isDateBeforeToday = (date: Date) =>
  DateFormatter(date).startOf('day') < DateFormatter().startOf('day');

export const updateCheckinDateIfBeforeToday = (
  search: SearchParams,
  onSearchChange: OnChangeSearchParams => void,
) => {
  if (isDateBeforeToday(search.checkin)) {
    onSearchChange({
      ...search,
      checkin: new Date(),
      checkout: DateFormatter()
        .add(6, 'days')
        .toDate(),
    });
  }
};
