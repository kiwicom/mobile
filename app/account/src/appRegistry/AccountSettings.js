// @flow strict

import * as React from 'react';
import { WithNativeNavigation } from '@kiwicom/mobile-shared';
import { Settings as AccountSettingsStack, NavigationProvider } from '@kiwicom/account-native';

type Props = {|
  +onBackClicked: () => void,
|};

class AccountSettings extends React.Component<Props> {
  render() {
    return (
      <NavigationProvider onBackPressed={this.props.onBackClicked}>
        <AccountSettingsStack />
      </NavigationProvider>
    );
  }
}

export default WithNativeNavigation(AccountSettings, 'AccountSettings');
