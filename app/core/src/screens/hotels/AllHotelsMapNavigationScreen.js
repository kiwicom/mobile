// @flow

import * as React from 'react';
import { connect } from '@kiwicom/react-native-app-redux';
import { AllHotelsMap } from '@kiwicom/react-native-app-hotels';

import type { Navigation } from '../../types/Navigation';
import type {
  HotelsReducerState,
  HotelsReducerActions,
  HotelsSearchParametersType,
} from '../../../../hotels/src/HotelsReducer'; // FIXME: this wil be fixed with hotels package separation

type ContainerProps = {|
  navigation: Navigation,
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
