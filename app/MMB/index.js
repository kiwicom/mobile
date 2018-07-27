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
import WalletContext from './src/context/WalletContext';
import TravelDocumentFormContext from './src/scenes/travelDocument/form/TravelDocumentFormContext';

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
        <WalletContext.Provider>
          <BookingDetailContext.Provider>
            <TravelDocumentFormContext.Provider>
              <NavigationStack
                onNavigationStateChange={this.props.onNavigationStateChange}
              />
            </TravelDocumentFormContext.Provider>
          </BookingDetailContext.Provider>
        </WalletContext.Provider>
      </AuthContext.Provider>
    </Dimensions.Provider>
  );
}

AppRegistry.registerComponent('ManageMyBooking', () =>
  WithNativeNavigation(ManageMyBookingPackage, 'ManageMyBooking'),
);

export { ManageMyBookingPackage };
