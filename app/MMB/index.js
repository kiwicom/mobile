// @flow

import * as React from 'react';
import { AppRegistry } from 'react-native';
import { AuthContext } from '@kiwicom/mobile-relay';
import { Dimensions, type DimensionType } from '@kiwicom/mobile-shared';

import NavigationStack from './src/navigation/NavigationStack';
import BookingDetailContext from './src/context/BookingDetailContext';

type Props = {|
  currency: string,
  accessToken: string,
  dimensions: DimensionType,
|};

class ManageMyBookingPackage extends React.Component<Props> {
  render = () => (
    <Dimensions.Provider dimensions={this.props.dimensions}>
      <AuthContext.Provider accessToken={this.props.accessToken}>
        <BookingDetailContext.Provider>
          <NavigationStack />
        </BookingDetailContext.Provider>
      </AuthContext.Provider>
    </Dimensions.Provider>
  );
}

AppRegistry.registerComponent('ManageMyBooking', () => ManageMyBookingPackage);

export { ManageMyBookingPackage };
