// @flow

import * as React from 'react';
import { connect } from '@kiwicom/react-native-app-redux';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Icon, Device } from '@kiwicom/react-native-app-shared';

import AllHotels from '../allHotels/AllHotels';
import AllHotelsMap from '../map/allHotels/AllHotelsMap';
import type {
  OnChangeSearchParams,
  SearchParams,
} from '../allHotels/searchForm/SearchParametersType';
import type {
  FilterParams,
  OnChangeFilterParams,
} from '../filter/FilterParametersType';
import type {
  HotelsReducerActions,
  HotelsReducerState,
} from '../HotelsReducer';

type ContainerProps = {|
  navigation: Object, // FIXME: navigation type is still part of the core package
  currency: string,
|};

type StateProps = {|
  cityId: string | null,
  search: SearchParams,
  location: string,
  filter: FilterParams,
|};

type DispatchProps = {|
  onSearchChange: OnChangeSearchParams => void,
  onFilterChange: OnChangeFilterParams => void,
  onLocationChange: string => void,
  onCityIdChange: (string | null) => void,
|};

type NavigationProps = {|
  onBackClicked: () => void,
|};

type Props = ContainerProps & StateProps & DispatchProps & NavigationProps;

const style = StyleSheet.create({
  headerButton: {
    marginHorizontal: 10,
  },
});

class AllHotelsNavigationScreen extends React.Component<Props> {
  static navigationOptions = (props: Props) => {
    function goToAllHotelsMap() {
      props.navigation.navigate('AllHotelsMap');
    }

    return {
      headerTitle: 'Hotels',
      headerRight: !Device.isTablet() ? (
        <TouchableOpacity style={style.headerButton} onPress={goToAllHotelsMap}>
          <Icon name="map" size={30} color="#fff" />
        </TouchableOpacity>
      ) : null,
      headerLeft: (
        <TouchableOpacity
          style={style.headerButton}
          onPress={props.onBackClicked}
        >
          <Icon name="chevron-left" size={30} color="#fff" />
        </TouchableOpacity>
      ),
    };
  };

  openSingleHotel = searchParams =>
    this.props.navigation.navigate('SingleHotel', searchParams);

  renderHotels = () => (
    <AllHotels
      currency={this.props.currency}
      search={this.props.search}
      location={this.props.location}
      filter={this.props.filter}
      openSingleHotel={this.openSingleHotel}
      onSearchChange={this.props.onSearchChange}
      onFilterChange={this.props.onFilterChange}
      onLocationChange={this.props.onLocationChange}
      onCityIdChange={this.props.onCityIdChange}
    />
  );

  renderHotelsWithMap = () => (
    <View style={styles.wrapper}>
      {this.renderHotels()}
      <View style={styles.map}>
        <AllHotelsMap
          onGoToSingleHotel={this.openSingleHotel}
          onFilterChange={this.props.onFilterChange}
          currency={this.props.currency}
          search={this.props.search}
          cityId={this.props.cityId}
          filter={this.props.filter}
        />
      </View>
    </View>
  );

  render = () =>
    Device.isTablet() ? this.renderHotelsWithMap() : this.renderHotels();
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  map: { width: '55%' },
});

const select = ({ hotels }: { hotels: HotelsReducerState }): StateProps => ({
  search: hotels.searchParams,
  cityId: hotels.cityId,
  location: hotels.location,
  filter: hotels.filterParams,
});

const actions = (dispatch: HotelsReducerActions => void): DispatchProps => ({
  onSearchChange: search =>
    dispatch({
      type: 'setSearch',
      search,
    }),
  onFilterChange: filter =>
    dispatch({
      type: 'setFilter',
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
