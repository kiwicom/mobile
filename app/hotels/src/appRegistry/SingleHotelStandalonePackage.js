// @flow

import * as React from 'react';
import { DateFormatter } from '@kiwicom/mobile-localization';

import RootComponent from './RootComponent';
import SingleHotelStack from '../navigation/singleHotel/SingleHotelStack';
import type { RoomsConfiguration } from '../singleHotel/AvailableHotelSearchInput';

type Props = {|
  dataSaverEnabled: boolean,
  onBackClicked: () => void,
  hotelId: string,
  checkin: string,
  checkout: string,
  roomsConfiguration: RoomsConfiguration,
  bookingComAffiliate: string,
  currency: string,
  language: string,
|};

export default class SingleHotelStandAlonePackage extends React.Component<
  Props,
> {
  renderInnerComponent = (onBackClicked: () => void) => {
    const screenProps = {
      ...this.props,
      // Better to pass strings than date object from native,
      // format YYYY-MM-DD
      checkin: DateFormatter(this.props.checkin).toDate(),
      checkout: DateFormatter(this.props.checkout).toDate(),
      onBackClicked,
      isStandAlonePackage: true,
    };
    return <SingleHotelStack screenProps={screenProps} />;
  };

  render = () => {
    return (
      <RootComponent
        render={this.renderInnerComponent}
        onBackClicked={this.props.onBackClicked}
        dataSaverEnabled={this.props.dataSaverEnabled}
      />
    );
  };
}
