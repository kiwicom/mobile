// @flow

import * as React from 'react';
import { type NavigationType } from '@kiwicom/mobile-navigation';
import { HeaderBackButton } from 'react-navigation';

import AllHotelsMap from '../../map/allHotels/AllHotelsMap';
import type { Coordinates } from '../../CoordinatesType';
import type { AvailableHotelSearchInput } from '../../singleHotel/AvailableHotelSearchInput';

type Props = {|
  navigation: NavigationType,
  currency: string,
  coordinates: Coordinates | null,
|};

export default class AllHotelsMapNavigationScreen extends React.Component<
  Props,
> {
  static navigationOptions = ({ navigation }: Props) => {
    function goBack() {
      navigation.goBack(null);
    }
    return {
      headerLeft: <HeaderBackButton tintColor="#fff" onPress={goBack} />,
    };
  };

  goToHotel = (searchParams: AvailableHotelSearchInput) => {
    return this.props.navigation.navigate({
      routeName: 'SingleHotel',
      key: 'key-SingleHotel',
      params: searchParams,
    });
  };

  render = () => (
    <AllHotelsMap
      onGoToSingleHotel={this.goToHotel}
      currency={this.props.currency}
      coordinates={this.props.coordinates}
    />
  );
}
