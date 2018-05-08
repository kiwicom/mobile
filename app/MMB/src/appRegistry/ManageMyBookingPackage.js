// @flow

import * as React from 'react';
import { AuthContext } from '@kiwicom/mobile-relay';

import NavigationStack from '../navigation/NavigationStack';

type Props = {|
  currency: string,
  accessToken: string,
|};

export default class ManageMyBookingPackage extends React.Component<Props> {
  render = () => (
    <AuthContext.Provider accessToken={this.props.accessToken}>
      <NavigationStack />
    </AuthContext.Provider>
  );
}
