// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { AllHotels } from '@kiwicom/react-native-app-hotels';
import { Icon } from '@kiwicom/react-native-app-common';

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
  search: HotelsSearchParametersType,
  location: string,
|};

type DispatchProps = {|
  onFilterChange: Object => void,
  onLocationChange: string => void,
  onCityIdChange: (string | null) => void,
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
          <Icon name="map" size={30} color="#fff" />
        </TouchableOpacity>
      ),
    };
  };

  openSingleHotel = searchParams =>
    this.props.navigation.navigate('SingleHotel', searchParams);

  render = () => (
    <AllHotels
      search={this.props.search}
      location={this.props.location}
      openSingleHotel={this.openSingleHotel}
      onFilterChange={this.props.onFilterChange}
      onLocationChange={this.props.onLocationChange}
      onCityIdChange={this.props.onCityIdChange}
    />
  );
}

const select = ({ hotels }: { hotels: HotelsReducerState }): StateProps => ({
  search: hotels.searchParams,
  location: hotels.location,
});

const actions = (dispatch: HotelsReducerActions => void): DispatchProps => ({
  onFilterChange: filter =>
    dispatch({
      type: 'setSearchFilters',
      filter,
    }),
  onLocationChange: (location: string) =>
    dispatch({
      type: 'setLocation',
      location,
    }),
  onCityIdChange: (cityId: string | null) =>
    dispatch({
      type: 'setCityId',
      cityId,
    }),
});

export default (connect(select, actions)(
  AllHotelsNavigationScreen,
): React.ComponentType<ContainerProps>);
