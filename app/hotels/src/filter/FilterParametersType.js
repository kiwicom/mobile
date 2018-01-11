// @flow

export type FilterParams = {
  starsRating: number[],
  minPrice: number | null,
  maxPrice: number | null,
};

export type OnChangeFilterParams = {
  starsFilter?: number[],
  minPrice?: ?number,
  maxPrice?: ?number,
};
