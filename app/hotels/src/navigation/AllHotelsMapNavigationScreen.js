// @flow

import * as React from 'react';
import { connect } from '@kiwicom/react-native-app-redux';
import { type NavigationType } from '@kiwicom/react-native-app-navigation';

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
import type { Coordinates } from '../CoordinatesType';

type ContainerProps = {|
  navigation: NavigationType,
  currency: string,
  coordinates: Coordinates | null,
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
    this.props.navigation.navigate({
      routeName: 'SingleHotel',
      key: 'key-SingleHotel',
      params: searchParams,
    });

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
        coordinates={this.props.coordinates}
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
