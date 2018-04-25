// @flow

import * as React from 'react';
import { DateFormatter } from '@kiwicom/mobile-localization';

import RootComponent from './RootComponent';
import HotelsStack from '../navigation/NavigationStack';
import type { Coordinates } from '../CoordinatesType';

type Props = {|
  bookingComAffiliate: string,
  language: string,
  currency: string,
  dataSaverEnabled: boolean,
  onBackClicked: () => void,
  coordinates: Coordinates | null,
  checkin?: string,
  checkout?: string,
|};

export default class HotelsStandalonePackage extends React.Component<Props> {
  renderInnerComponent = (onBackClicked: () => void) => {
    const checkin = this.props.checkin
      ? DateFormatter(this.props.checkin).toDate()
      : null;
    const checkout = this.props.checkout
      ? DateFormatter(this.props.checkout).toDate()
      : null;
    const screenProps = {
      ...this.props,
      onBackClicked,
      checkin,
      checkout,
    };

    return <HotelsStack screenProps={screenProps} />;
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
