// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { AllHotelsMap } from '@kiwicom/react-native-app-hotels';

import type { Navigation } from '../../types/Navigation';
import type {
  ReduxActions,
  ReduxState,
  SearchParametersType,
} from '../../types/Redux';

type ContainerProps = {|
  navigation: Navigation,
|};

type StateProps = {|
  search: SearchParametersType,
|};

type DispatchProps = {|
  onFilterChange: SearchParametersType => void,
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
    />
  );
}

const select = (state: ReduxState): StateProps => ({
  search: state.hotels.searchParams,
});

const actions = (dispatch: ReduxActions => void): DispatchProps => ({
  onFilterChange: filter =>
    dispatch({
      type: 'setSearchFilters',
      filter,
    }),
});

export default (connect(select, actions)(
  AllHotelsMapNavigationScreen,
): React.ComponentType<ContainerProps>);
