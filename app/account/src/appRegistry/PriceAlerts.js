// @flow strict

import * as React from 'react';
import { WithNativeNavigation } from '@kiwicom/mobile-shared';

import WithAccountStack from '../WithAccountStack';
import TodoScreen from '../TodoScreen';

type Props = {|
  +onBackClicked: () => void,
  +token: string,
|};

class PriceAlerts extends React.Component<Props> {
  render() {
    return (
      <WithAccountStack {...this.props}>
        <TodoScreen />
      </WithAccountStack>
    );
  }
}
export default WithNativeNavigation(PriceAlerts, 'AccountPriceAlerts');
