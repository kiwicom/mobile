// @flow

import * as React from 'react';

import type {
  FilterParams,
  ActiveFilters,
  OnChangeFilterParams,
} from './filter/FilterParametersType';

const defaultFilterParams = {
  starsRating: [],
  minPrice: null,
  maxPrice: null,
  freeCancellation: false,
  hotelFacilities: [],
  minScore: null,
};

const defaultActiveFilters = {
  isPriceFilterActive: false,
  isStarsFilterActive: false,
  isMinScoreActive: false,
  isHotelFacilitiesActive: false,
};

const { Consumer, Provider: ContextProvider } = React.createContext({
  filterParams: defaultFilterParams,
  activeFilters: defaultActiveFilters,
  actions: {
    setFilter: () => {},
  },
});

type Props = {|
  children: React.Node,
|};

type State = {|
  filterParams: FilterParams,
  activeFilters: ActiveFilters,
  actions: {|
    setFilter: OnChangeFilterParams => void,
  |},
|};

class Provider extends React.Component<Props, State> {
  setActiveFilters = () => {
    this.setState(state => {
      const {
        minPrice,
        maxPrice,
        starsRating,
        minScore,
        hotelFacilities,
      } = state.filterParams;

      return {
        ...state,
        activeFilters: {
          isPriceFilterActive: minPrice !== null || maxPrice !== null,
          isStarsFilterActive: starsRating.length > 0,
          isMinScoreActive: minScore !== null,
          isHotelFacilitiesActive: hotelFacilities.length > 0,
        },
      };
    });
  };

  setFilter = (action: OnChangeFilterParams) => {
    this.setState(
      state => ({
        ...state,
        filterParams: {
          ...state.filterParams,
          ...action,
        },
      }),
      this.setActiveFilters,
    );
  };

  state = {
    filterParams: defaultFilterParams,
    activeFilters: defaultActiveFilters,
    actions: {
      setFilter: this.setFilter,
    },
  };

  render = () => (
    <ContextProvider value={this.state}>{this.props.children}</ContextProvider>
  );
}

export default {
  Consumer,
  Provider,
};
