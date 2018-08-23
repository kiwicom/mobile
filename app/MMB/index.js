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
import HotelsContext from './src/context/HotelsContext';

type Props = {|
  +currency: string,
  +dimensions: DimensionType,
  +onNavigationStateChange: () => void,
  +accessToken?: string,
  +bookingId?: number,
  +simpleToken?: string,
  +version: string,
  +dataSaverEnabled: boolean,
  +bookingComAffiliate: string,
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
                <HotelsContext.Provider
                  version={this.props.version}
                  dataSaverEnabled={this.props.dataSaverEnabled}
                  bookingComAffiliate={this.props.bookingComAffiliate}
                >
                  <NavigationStack
                    onNavigationStateChange={this.props.onNavigationStateChange}
                  />
                </HotelsContext.Provider>
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
