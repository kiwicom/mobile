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
  hotelFacilities: [],
  minScore: null,
};

const defaultActiveFilters = {
  isPriceFilterActive: false,
  isStarsFilterActive: false,
  isMinScoreActive: false,
  isHotelFacilitiesActive: false,
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
          isOrderFilterActive: state.orderBy != null,
        },
      };
    });
  };

  setFilter = ({ orderBy, ...action }: OnChangeFilterParams) => {
    this.setState(state => {
      const nextOrderBy = orderBy === undefined ? state.orderBy : orderBy;
      return {
        ...state,
        filterParams: {
          ...state.filterParams,
          ...action,
        },
        orderBy: nextOrderBy,
      };
    }, this.setActiveFilters);
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

export default { Consumer, Provider };
