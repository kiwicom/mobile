// @flow

import * as React from 'react';
import { connect } from '@kiwicom/react-native-app-redux';

import AllHotelsMap from '../map/AllHotelsMap';
import type {
  HotelsReducerState,
  HotelsReducerActions,
  HotelsSearchParametersType,
} from '../HotelsReducer';

type ContainerProps = {|
  navigation: Object, // FIXME: navigation type is still part of the core package
|};

type StateProps = {|
  cityId: string | null,
  search: HotelsSearchParametersType,
|};

type DispatchProps = {|
  onFilterChange: HotelsSearchParametersType => void,
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
    />
  );
}

const select = ({ hotels }: { hotels: HotelsReducerState }): StateProps => ({
  search: hotels.searchParams,
  cityId: hotels.cityId,
});

const actions = (dispatch: HotelsReducerActions => void): DispatchProps => ({
  onFilterChange: filter =>
    dispatch({
      type: 'setSearchFilters',
      filter,
    }),
});

export default (connect(select, actions)(
  AllHotelsMapNavigationScreen,
): React.ComponentType<ContainerProps>);
