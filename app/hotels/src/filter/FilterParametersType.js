// @flow

export type FilterParams = {|
  starsRating: number[],
  minPrice: number | null,
  maxPrice: number | null,
  freeCancellation: boolean,
  hotelFacilities: string[],
  minScore: number | null,
|};

export type OnChangeFilterParams = {|
  starsRating?: number[],
  minPrice?: ?number,
  maxPrice?: ?number,
  freeCancellation?: boolean,
  hotelFacilities?: string[],
  minScore?: ?number,
|};

export type ActiveFilters = {|
  isPriceFilterActive: boolean,
  isStarsFilterActive: boolean,
  isMinScoreActive: boolean,
  isHotelFacilitiesActive: boolean,
|};
