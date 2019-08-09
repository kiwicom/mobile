// @flow strict

import * as React from 'react';
import { WithNativeNavigation } from '@kiwicom/mobile-shared';
import { Accounts as AccountStack } from '@kiwicom/account-native';

type Props = {||};

class AccountSettings extends React.Component<Props> {
  render() {
    return <AccountStack />;
  }
}

export default WithNativeNavigation(AccountSettings, 'AccountSettings');
