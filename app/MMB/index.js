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
import InsuranceOverviewContext from './src/scenes/tripServices/insurance/insuranceOverviewScene/InsuranceOverviewSceneContext';

type Props = {|
  +currency: string,
  +dimensions: DimensionType,
  +onNavigationStateChange: () => void,
  +accessToken?: string,
  +bookingId?: number,
  +simpleToken?: string,
|};

class ManageMyBookingPackage extends React.Component<Props> {
  render = () => (
    <Dimensions.Provider dimensions={this.props.dimensions}>
      <AuthContext.Provider
        accessToken={this.props.accessToken || null}
        bookingId={this.props.bookingId || null}
        simpleToken={this.props.simpleToken || null}
      >
        <WalletContext.Provider>
          <BookingDetailContext.Provider currency={this.props.currency}>
            <TravelDocumentFormContext.Provider>
              <InsuranceOverviewContext.Provider>
                <NavigationStack
                  onNavigationStateChange={this.props.onNavigationStateChange}
                />
              </InsuranceOverviewContext.Provider>
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
