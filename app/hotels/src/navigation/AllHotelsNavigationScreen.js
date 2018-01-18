// @flow

import * as React from 'react';
import { connect } from '@kiwicom/react-native-app-redux';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from '@kiwicom/react-native-app-common';

import AllHotels from '../allHotels/AllHotels';
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
      headerRight: (
        <TouchableOpacity style={style.headerButton} onPress={goToAllHotelsMap}>
          <Icon name="map" size={30} color="#fff" />
        </TouchableOpacity>
      ),
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

  render = () => {
    const {
      search,
      location,
      filter,
      onSearchChange,
      onFilterChange,
      onLocationChange,
      onCityIdChange,
      currency,
    } = this.props;

    return (
      <AllHotels
        currency={currency}
        search={search}
        location={location}
        filter={filter}
        openSingleHotel={this.openSingleHotel}
        onSearchChange={onSearchChange}
        onFilterChange={onFilterChange}
        onLocationChange={onLocationChange}
        onCityIdChange={onCityIdChange}
      />
    );
  };
}

const select = ({ hotels }: { hotels: HotelsReducerState }): StateProps => ({
  search: hotels.searchParams,
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
