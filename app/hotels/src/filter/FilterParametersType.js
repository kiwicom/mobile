// @flow

import { Decimal } from 'decimal.js-light';

export type FilterParams = {|
  +starsRating: number[],
  +minPrice: ?Decimal,
  +maxPrice: ?Decimal,
  +freeCancellation: boolean,
  +hotelAmenities: string[],
  +minScore: ?number,
|};

export type OrderByEnum =
  | 'DISTANCE'
  | 'POPULARITY'
  | 'PRICE'
  | 'RANKING'
  | 'REVIEW_SCORE'
  | 'STARS';

export type OnChangeFilterParams = {|
  +starsRating?: number[],
  +minPrice?: ?Decimal,
  +maxPrice?: ?Decimal,
  +freeCancellation?: boolean,
  +hotelAmenities?: string[],
  +minScore?: ?number,
  +orderBy?: ?OrderByEnum,
|};

export type ActiveFilters = {|
  +isPriceFilterActive: boolean,
  +isStarsFilterActive: boolean,
  +isMinScoreActive: boolean,
  +isHotelAmenitiesActive: boolean,
  +isOrderFilterActive: boolean,
|};
