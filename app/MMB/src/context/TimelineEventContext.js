// @flow

import * as React from 'react';
import { Text, StyleSheet, type StylePropType } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

const { Consumer, Provider } = React.createContext({
  isPastEvent: false,
});

type ChildrenType = React.Element<any>;
type Props = {|
  +children: ChildrenType | React.ChildrenArray<ChildrenType>,
  +style?: StylePropType,
|};

const TextWithIsPastEventContext = ({ children, style }: Props) => (
  <Consumer>
    {({ isPastEvent }) => (
      <Text style={[isPastEvent && styles.isPastEvent, style]}>{children}</Text>
    )}
  </Consumer>
);

export { TextWithIsPastEventContext };

export default { Consumer, Provider };

const styles = StyleSheet.create({
  isPastEvent: {
    color: defaultTokens.paletteInkLight,
  },
});
