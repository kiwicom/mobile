// @flow

import * as React from 'react';
import {
  WithNativeNavigation,
  type DimensionType,
} from '@kiwicom/mobile-shared';

import NavigationStack from '../../src/navigation/NavigationStack';
import RootComponent from './RootComponent';

type Props = {|
  +dimensions: DimensionType,
  +onNavigationStateChange: () => void,
  +accessToken: string,
  +currency: string,
|};

type State = {|
  accessToken: string,
|};

class MMBStandalonePackage extends React.Component<Props, State> {
  state = {
    accessToken: '',
  };

  renderInnerComponent = () => {
    return (
      <NavigationStack
        onNavigationStateChange={this.props.onNavigationStateChange}
      />
    );
  };

  render = () => {
    return (
      <RootComponent
        dimensions={this.props.dimensions}
        accessToken={this.props.accessToken}
      >
        {this.renderInnerComponent()}
      </RootComponent>
    );
  };
}

//$FlowFixMe - `onBackClicked` is not implemented yet in Android app
export default WithNativeNavigation(MMBStandalonePackage, 'ManageMyBooking');
