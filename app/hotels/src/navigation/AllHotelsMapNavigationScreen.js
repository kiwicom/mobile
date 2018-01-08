// @flow

import * as React from 'react';
import { connect } from '@kiwicom/react-native-app-redux';

import AllHotelsMap from '../map/AllHotelsMap';
import type {
  HotelsReducerState,
  HotelsReducerActions,
} from '../HotelsReducer';
import type { SearchParams } from '../allHotels/searchForm/SearchParametersType';
import type {
  FilterParams,
  OnChangeFilterParams,
} from '../filter/FilterParametersType';

type ContainerProps = {|
  navigation: Object, // FIXME: navigation type is still part of the core package
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

function AllHotelsMapNavigationScreen(props: Props) {
  function goToHotel() {
    props.navigation.navigate('SingleHotel');
  }

  return (
    <AllHotelsMap
      onGoToSingleHotel={goToHotel}
      onFilterChange={props.onFilterChange}
      search={props.search}
      cityId={props.cityId}
      filter={props.filter}
    />
  );
}

const select = ({ hotels }: { hotels: HotelsReducerState }): StateProps => ({
  search: hotels.searchParams,
  cityId: hotels.cityId,
  filter: hotels.filterParams,
});

const actions = (dispatch: HotelsReducerActions => void): DispatchProps => ({
  onFilterChange: filter =>
    dispatch({
      type: 'setFilter',
      filter,
    }),
});

export default (connect(select, actions)(
  AllHotelsMapNavigationScreen,
): React.ComponentType<ContainerProps>);
