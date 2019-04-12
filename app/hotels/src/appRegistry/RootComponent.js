// @flow

import * as React from 'react';
import { ConfigContext } from '@kiwicom/mobile-config';
import { Dimensions, GestureController } from '@kiwicom/mobile-shared';

import HotelsFilterContext from '../HotelsFilterContext';
import HotelsContext, {
  type RoomConfigurationType,
  type ApiProvider,
} from '../HotelsContext';
import SearchResultsContext from '../navigation/allHotels/SearchResultsContext';
import type { Coordinates } from '../CoordinatesType';

type Props = {|
  +dataSaverEnabled: boolean,
  +children: React.Node,
  +version: string,
  +cityId?: string,
  +cityName?: string,
  +checkin?: string,
  +checkout?: string,
  +roomsConfiguration?: RoomConfigurationType,
  +currency: string,
  +coordinates?: Coordinates | null,
  +hotelId?: string,
  +apiProvider: ApiProvider,
  +onBackClicked: () => void,
  +lastNavigationMode?: string,
|};

export default class RootComponent extends React.Component<Props> {
  onClosePress = () => {
    // This prop will only come if we launch this screen from a native app
    if (this.props.lastNavigationMode === 'present') {
      GestureController.closeModal('NewKiwiHotels');
    } else {
      this.props.onBackClicked();
    }
  };

  getGuestCount = () => {
    if (this.props.roomsConfiguration == null) {
      return 0;
    }
    return this.props.roomsConfiguration.reduce((sum, current) => {
      const adults = current.adultsCount;
      const children = current.children?.length ?? 0;
      return sum + adults + children;
    }, 0);
  };

  render() {
    const guestCount = this.getGuestCount();
    return (
      <SearchResultsContext.Provider>
        <ConfigContext.Provider dataSaverEnabled={this.props.dataSaverEnabled}>
          <HotelsFilterContext.Provider>
            <HotelsContext.Provider
              version={this.props.version}
              cityId={this.props.cityId}
              checkin={this.props.checkin}
              checkout={this.props.checkout}
              roomsConfiguration={this.props.roomsConfiguration}
              currency={this.props.currency}
              cityName={this.props.cityName}
              latitude={this.props.coordinates?.latitude ?? null}
              longitude={this.props.coordinates?.longitude ?? null}
              hotelId={this.props.hotelId}
              apiProvider={this.props.apiProvider}
              closeHotels={this.onClosePress}
              guestCount={guestCount}
            >
              <Dimensions.Provider>{this.props.children}</Dimensions.Provider>
            </HotelsContext.Provider>
          </HotelsFilterContext.Provider>
        </ConfigContext.Provider>
      </SearchResultsContext.Provider>
    );
  }
}
