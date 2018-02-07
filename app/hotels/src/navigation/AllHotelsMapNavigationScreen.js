// @flow

import * as React from 'react';
import { connect } from '@kiwicom/react-native-app-redux';

import AllHotelsMap from '../map/allHotels/AllHotelsMap';
import type { HotelsReducerState } from '../HotelsReducer';
import type {
  FilterReducerActions,
  FilterReducerState,
} from '../filter/FiltersReducer';
import type { SearchParams } from '../allHotels/searchForm/SearchParametersType';
import type {
  FilterParams,
  OnChangeFilterParams,
} from '../filter/FilterParametersType';

type ContainerProps = {|
  navigation: Object, // FIXME: navigation type is still part of the core package
  currency: string,
|};

type StateProps = {|
  cityId: string | null,
  search: SearchParams,
  filter: FilterParams,
|};

type DispatchProps = {|
  onFilterChange: OnChangeFilterParams => void,
|};

type Props = ContainerProps & StateProps & DispatchProps;

class AllHotelsMapNavigationScreen extends React.Component<Props> {
  goToHotel = searchParams =>
    this.props.navigation.navigate('SingleHotel', searchParams);

  render = () => {
    const { search, filter, cityId, onFilterChange, currency } = this.props;

    return (
      <AllHotelsMap
        onGoToSingleHotel={this.goToHotel}
        onFilterChange={onFilterChange}
        search={search}
        cityId={cityId}
        filter={filter}
        currency={currency}
      />
    );
  };
}

const select = ({
  hotels,
  filters,
}: {
  hotels: HotelsReducerState,
  filters: FilterReducerState,
}): StateProps => ({
  search: hotels.searchParams,
  cityId: hotels.cityId,
  filter: filters.filterParams,
});

const actions = (dispatch: FilterReducerActions => void): DispatchProps => ({
  onFilterChange: filter =>
    dispatch({
      type: 'filtersReducer/FILTER_CHANGED',
      filter,
    }),
});

export default (connect(select, actions)(
  AllHotelsMapNavigationScreen,
): React.ComponentType<ContainerProps>);
