// @flow strict

import * as React from 'react';
import {
  Stars,
  Checkbox,
  StyleSheet,
  Text,
  type StylePropType,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +onPress: () => void,
  +stars: number,
  +isChecked?: boolean,
  +style?: StylePropType,
|};

export default function StarsCheckbox(props: Props) {
  return (
    <Checkbox
      onPress={props.onPress}
      isChecked={props.isChecked}
      style={props.style}
    >
      <Text style={styles.stars}>
        <Stars rating={props.stars} />
      </Text>
    </Checkbox>
  );
}

const styles = StyleSheet.create({
  stars: {
    fontSize: 16,
    color: defaultTokens.paletteProductNormal,
  },
});
