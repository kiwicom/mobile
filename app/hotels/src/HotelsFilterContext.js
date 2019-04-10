// @flow

import * as React from 'react';

import type {
  FilterParams,
  ActiveFilters,
  OnChangeFilterParams,
  OrderByEnum,
} from './filter/FilterParametersType';

const defaultFilterParams = {
  starsRating: [],
  minPrice: null,
  maxPrice: null,
  freeCancellation: false,
  hotelAmenities: [],
  minScore: null,
};

const defaultActiveFilters = {
  isPriceFilterActive: false,
  isStarsFilterActive: false,
  isMinScoreActive: false,
  isHotelAmenitiesActive: false,
  isOrderFilterActive: false,
};

export const HotelsFilterContext = React.createContext<State>({
  filterParams: defaultFilterParams,
  activeFilters: defaultActiveFilters,
  orderBy: null,
  actions: {
    setFilter: () => {},
  },
});

type Props = {|
  +children: React.Node,
|};

type State = {|
  filterParams: FilterParams,
  activeFilters: ActiveFilters,
  orderBy: null | OrderByEnum,
  actions: {|
    +setFilter: OnChangeFilterParams => void,
  |},
|};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      filterParams: defaultFilterParams,
      activeFilters: defaultActiveFilters,
      orderBy: null,
      actions: {
        setFilter: this.setFilter,
      },
    };
  }

  setFilter = ({ orderBy, ...action }: OnChangeFilterParams) => {
    this.setState(state => {
      const nextOrderBy = orderBy === undefined ? state.orderBy : orderBy;
      const filterParams = {
        ...state.filterParams,
        ...action,
      };

      const {
        minPrice,
        maxPrice,
        starsRating,
        minScore,
        hotelAmenities,
      } = filterParams;

      const activeFilters = {
        isPriceFilterActive: minPrice !== null || maxPrice !== null,
        isStarsFilterActive: starsRating.length > 0,
        isMinScoreActive: minScore !== null,
        isHotelAmenitiesActive: hotelAmenities.length > 0,
        isOrderFilterActive: nextOrderBy != null,
      };

      return {
        ...state,
        filterParams,
        orderBy: nextOrderBy,
        activeFilters,
      };
    });
  };

  render() {
    return (
      <HotelsFilterContext.Provider value={this.state}>
        {this.props.children}
      </HotelsFilterContext.Provider>
    );
  }
}

export type HotelsFilterState = State;

export default { Provider };
