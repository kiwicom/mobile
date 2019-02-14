// @flow

import * as React from 'react';
import { withContext } from '@kiwicom/mobile-shared';

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

const { Consumer, Provider: ContextProvider } = React.createContext<State>({
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
      <ContextProvider value={this.state}>
        {this.props.children}
      </ContextProvider>
    );
  }
}

export const withHotelsFilterContext = (select: State => Object) =>
  withContext<State>(select, Consumer);

export type HotelsFilterState = State;

const HotelsFilterContext = { Consumer, Provider };

export default HotelsFilterContext;
