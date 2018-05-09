// @flow

import * as React from 'react';
import { AuthContext } from '@kiwicom/mobile-relay';
import { AdaptableLayout } from '@kiwicom/mobile-shared';

import NavigationStack from '../navigation/NavigationStack';

type Props = {|
  currency: string,
  accessToken: string,
|};

export default class ManageMyBookingPackage extends React.Component<Props> {
  render = () => (
    <AdaptableLayout.Provider>
      <AuthContext.Provider accessToken={this.props.accessToken}>
        <NavigationStack />
      </AuthContext.Provider>
    </AdaptableLayout.Provider>
  );
}
