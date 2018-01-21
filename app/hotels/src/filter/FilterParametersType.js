// @flow

export type FilterParams = {
  starsRating: number[],
  minPrice: number | null,
  maxPrice: number | null,
  hotelFacilities: string[],
};

export type OnChangeFilterParams = {
  starsFilter?: number[],
  minPrice?: ?number,
  maxPrice?: ?number,
  hotelFacilities?: string[],
};
