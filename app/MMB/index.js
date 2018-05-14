// @flow

import * as React from 'react';
import { AppRegistry } from 'react-native';
import { AuthContext } from '@kiwicom/mobile-relay';
import { AdaptableLayout } from '@kiwicom/mobile-shared';

import NavigationStack from './src/navigation/NavigationStack';

type Props = {|
  currency: string,
  accessToken: string,
|};

class ManageMyBookingPackage extends React.Component<Props> {
  render = () => (
    <AdaptableLayout.Provider>
      <AuthContext.Provider accessToken={this.props.accessToken}>
        <NavigationStack />
      </AuthContext.Provider>
    </AdaptableLayout.Provider>
  );
}

AppRegistry.registerComponent('ManageMyBooking', () => ManageMyBookingPackage);

export { ManageMyBookingPackage };
