// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { AllHotels } from '@kiwicom/react-native-app-hotels';
import { Ionicons } from '@expo/vector-icons';

import type { Navigation } from '../../types/Navigation';
import type {
  ReduxState,
  ReduxActions,
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

class AllHotelsNavigationScreen extends React.Component<Props> {
  static navigationOptions = (props: Props) => {
    function goToAllHotelsMap() {
      props.navigation.navigate('AllHotelsMap');
    }

    return {
      headerTitle: 'Hotels',
      headerRight: (
        <TouchableOpacity
          style={{ marginHorizontal: 10 }}
          onPress={goToAllHotelsMap}
        >
          <Ionicons name="md-map" size={30} color="#fff" />
        </TouchableOpacity>
      ),
    };
  };

  openSingleHotel = (id: string) =>
    this.props.navigation.navigate('SingleHotel', { hotelId: id });

  render = () => (
    <AllHotels
      search={this.props.search}
      openSingleHotel={this.openSingleHotel}
      onFilterChange={this.props.onFilterChange}
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
  AllHotelsNavigationScreen,
): React.ComponentType<ContainerProps>);
