// @flow

export type FilterParams = {|
  starsRating: number[],
  minPrice: number | null,
  maxPrice: number | null,
  freeCancellation: boolean,
  hotelFacilities: string[],
  minScore: number | null,
|};

export type OrderByEnum =
  | 'DISTANCE'
  | 'POPULARITY'
  | 'PRICE'
  | 'RANKING'
  | 'REVIEW_SCORE'
  | 'STARS';

export type OnChangeFilterParams = {|
  starsRating?: number[],
  minPrice?: ?number,
  maxPrice?: ?number,
  freeCancellation?: boolean,
  hotelFacilities?: string[],
  minScore?: ?number,
  orderBy?: ?OrderByEnum,
|};

export type ActiveFilters = {|
  isPriceFilterActive: boolean,
  isStarsFilterActive: boolean,
  isMinScoreActive: boolean,
  isHotelFacilitiesActive: boolean,
  isOrderFilterActive: boolean,
|};
