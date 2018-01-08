// @flow

export type FilterParams = {
  minPrice: number | null,
  maxPrice: number | null,
};

export type OnChangeFilterParams = {
  minPrice?: ?number,
  maxPrice?: ?number,
};
