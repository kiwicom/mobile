// @flow

import idx from 'idx';
import { DateUtils } from '@kiwicom/mobile-localization';

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
  cityId: ?string,
): Object => {
  let params: Object = {
    ...search,
    checkin: sanitizeDate(search.checkin),
    checkout: sanitizeDate(search.checkout),
  };

  if (cityId) {
    params.cityId = cityId;
  } else if (hasCoordinates(coordinates)) {
    params.latitude = idx(coordinates, _ => _.latitude);
    params.longitude = idx(coordinates, _ => _.longitude);
  }

  return params;
};

export const isDateBeforeToday = (date: Date) => {
  const today = new Date();
  return date < today && date.getUTCDay() !== today.getUTCDay();
};

export const updateCheckinDateIfBeforeToday = (
  search: SearchParams,
  onSearchChange: OnChangeSearchParams => void,
) => {
  if (isDateBeforeToday(search.checkin)) {
    onSearchChange({
      ...search,
      checkin: new Date(),
      checkout: DateUtils().addDays(6),
    });
  }
};
