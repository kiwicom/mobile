// @flow

import * as React from 'react';

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
|};

export default class HotelsStandalonePackage extends React.Component<Props> {
  renderInnerComponent = (onBackClicked: () => void) => {
    const screenProps = {
      ...this.props,
      onBackClicked,
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
