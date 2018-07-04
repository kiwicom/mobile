// @flow

import * as React from 'react';
import { AppRegistry } from 'react-native';
import { AuthContext } from '@kiwicom/mobile-relay';
import {
  Dimensions,
  WithNativeNavigation,
  type DimensionType,
} from '@kiwicom/mobile-shared';

import NavigationStack from './src/navigation/NavigationStack';
import BookingDetailContext from './src/context/BookingDetailContext';

type Props = {|
  currency: string,
  accessToken: string,
  dimensions: DimensionType,
  onNavigationStateChange: () => void,
|};

class ManageMyBookingPackage extends React.Component<Props> {
  render = () => (
    <Dimensions.Provider dimensions={this.props.dimensions}>
      <AuthContext.Provider accessToken={this.props.accessToken}>
        <BookingDetailContext.Provider>
          <NavigationStack
            onNavigationStateChange={this.props.onNavigationStateChange}
          />
        </BookingDetailContext.Provider>
      </AuthContext.Provider>
    </Dimensions.Provider>
  );
}

export { ManageMyBookingPackage };
