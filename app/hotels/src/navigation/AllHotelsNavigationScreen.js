// @flow

import * as React from 'react';
import { BackHandler, Platform } from 'react-native';
import { HeaderBackButton } from 'react-navigation';
import { connect } from '@kiwicom/react-native-app-redux';
import { View } from 'react-native';
import {
  StyleSheet,
  HeaderRightButton,
  AdaptableLayout,
  DismissKeyboardView,
} from '@kiwicom/react-native-app-shared';
import { type NavigationType } from '@kiwicom/react-native-app-navigation';

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
import type {
  FilterReducerState,
  FilterReducerActions,
} from '../filter/FiltersReducer';
import type { Coordinates } from '../CoordinatesType';

type ContainerProps = {|
  navigation: NavigationType,
  currency: string,
  coordinates: Coordinates | null,
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

export class AllHotelsNavigationScreen extends React.Component<Props> {
  backButtonListner = null;
  static navigationOptions = (props: Props) => {
    function goToAllHotelsMap() {
      props.navigation.navigate({
        routeName: 'AllHotelsMap',
        key: 'key-AllHotelsMap',
      });
    }

    function renderHeaderLeft() {
      return (
        <HeaderBackButton tintColor="#fff" onPress={props.onBackClicked} />
      );
    }

    function renderHeaderRight() {
      return (
        <AdaptableLayout
          renderOnNarrow={<HeaderRightButton onPress={goToAllHotelsMap} />}
        />
      );
    }

    return {
      headerLeft: renderHeaderLeft(),
      headerTitle: 'Hotels',
      headerRight: renderHeaderRight(),
    };
  };

  componentDidMount = () => {
    if (Platform.OS === 'android' && this.backButtonListner === null) {
      this.backButtonListner = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          this.props.onBackClicked();
          return true;
        },
      );
    }
  };

  openSingleHotel = (searchParams: any) =>
    this.props.navigation.navigate({
      routeName: 'SingleHotel',
      key: 'key-SingleHotel',
      params: searchParams,
    });

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
      coordinates={this.props.coordinates}
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
          coordinates={this.props.coordinates}
        />
      </View>
    </View>
  );

  render = () => {
    return (
      <DismissKeyboardView>
        <AdaptableLayout
          renderOnWide={this.renderHotelsWithMap()}
          renderOnNarrow={this.renderHotels()}
        />
      </DismissKeyboardView>
    );
  };
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  map: {
    width: '55%',
  },
});

const select = ({
  hotels,
  filters,
}: {
  hotels: HotelsReducerState,
  filters: FilterReducerState,
}): StateProps => ({
  search: hotels.searchParams,
  cityId: hotels.cityId,
  location: hotels.location,
  filter: filters.filterParams,
});

type DispatchType = HotelsReducerActions | FilterReducerActions;

const actions = (dispatch: DispatchType => void): DispatchProps => ({
  onSearchChange: search =>
    dispatch({
      type: 'setSearch',
      search,
    }),
  onFilterChange: filter =>
    dispatch({
      type: 'filtersReducer/FILTER_CHANGED',
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
