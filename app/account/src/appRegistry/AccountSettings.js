// @flow strict

import * as React from 'react';
import { WithNativeNavigation, Text, Translation } from '@kiwicom/mobile-shared';

type Props = {||};

class AccountSettings extends React.Component<Props> {
  render() {
    return (
      <Text>
        <Translation passThrough="account" />
      </Text>
    );
  }
}

export default WithNativeNavigation(AccountSettings, 'AccountSettings');
