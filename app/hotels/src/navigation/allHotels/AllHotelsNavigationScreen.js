// @flow

import * as React from 'react';
import {
  LayoutDoubleColumn,
  AdaptableLayout,
  WithStandaloneScreen,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { HeaderTitle, type NavigationType } from '@kiwicom/mobile-navigation';

import AllHotels from '../../allHotels/AllHotels';
import AllHotelsMap from '../../map/allHotels/AllHotelsMap';
import MapHeaderButton from './MapHeaderButton';
import type { Coordinates } from '../../CoordinatesType';

type ContainerProps = {|
  +navigation: NavigationType,
  +currency: string,
  +coordinates: Coordinates | null,
  +checkin: ?Date,
  +checkout: ?Date,
|};

type NavigationProps = {|
  +onBackClicked: () => void,
  +lastNavigationMode?: string,
|};

type Props = {| ...ContainerProps, ...NavigationProps |};

class AllHotelsNavigationScreen extends React.Component<Props> {
  static navigationOptions = (props: Props) => {
    function goToAllHotelsMap() {
      props.navigation.navigate('AllHotelsMap');
    }

    return {
      headerTitle: (
        <HeaderTitle>
          <Translation id="hotels.navigation.title.all_hotels" />
        </HeaderTitle>
      ),
      headerRight: (
        <AdaptableLayout
          renderOnNarrow={<MapHeaderButton onPress={goToAllHotelsMap} />}
        />
      ),
    };
  };

  openLocationPicker = (location: string | null) => {
    this.props.navigation.navigate('LocationPicker', { location });
  };

  openGuestsModal = () => {
    this.props.navigation.navigate('GuestsModal');
  };

  openSingleHotel = (searchParams: any) =>
    this.props.navigation.navigate('SingleHotel', searchParams);

  render = () => {
    return (
      <LayoutDoubleColumn
        menuComponent={
          <AllHotels
            currency={this.props.currency}
            openSingleHotel={this.openSingleHotel}
            coordinates={this.props.coordinates}
            openLocationPicker={this.openLocationPicker}
            openGuestsModal={this.openGuestsModal}
            checkin={this.props.checkin}
            checkout={this.props.checkout}
          />
        }
        containerComponent={
          <AllHotelsMap
            currency={this.props.currency}
            onGoToSingleHotel={this.openSingleHotel}
            coordinates={this.props.coordinates}
          />
        }
      />
    );
  };
}

export default WithStandaloneScreen(AllHotelsNavigationScreen, 'KiwiHotels');
