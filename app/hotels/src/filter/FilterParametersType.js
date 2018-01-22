// @flow

export type FilterParams = {
  starsRating: number[],
  minPrice: number | null,
  maxPrice: number | null,
  freeCancellation: boolean,
};

export type OnChangeFilterParams = {
  starsFilter?: number[],
  minPrice?: ?number,
  maxPrice?: ?number,
  freeCancellation?: boolean,
};
