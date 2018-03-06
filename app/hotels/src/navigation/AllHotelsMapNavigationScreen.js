// @flow

import * as React from 'react';
import { type NavigationType } from '@kiwicom/react-native-app-navigation';

import AllHotelsMap from '../map/allHotels/AllHotelsMap';
import type { Coordinates } from '../CoordinatesType';
import type { SearchParams } from '../allHotels/searchForm/SearchParametersType';

type Props = {|
  navigation: NavigationType,
  currency: string,
  coordinates: Coordinates | null,
|};

export default class AllHotelsMapNavigationScreen extends React.Component<
  Props,
> {
  goToHotel = (searchParams: SearchParams) =>
    this.props.navigation.navigate({
      routeName: 'SingleHotel',
      key: 'key-SingleHotel',
      params: searchParams,
    });

  render = () => (
    <AllHotelsMap
      onGoToSingleHotel={this.goToHotel}
      currency={this.props.currency}
      coordinates={this.props.coordinates}
    />
  );
}
