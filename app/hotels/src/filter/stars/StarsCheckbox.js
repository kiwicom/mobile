// @flow

import * as React from 'react';
import { Text } from 'react-native';
import {
  Color,
  Stars,
  Checkbox,
  StyleSheet,
  type StylePropType,
} from '@kiwicom/react-native-app-shared';

type Props = {|
  onPress: () => void,
  stars: number,
  isChecked?: boolean,
  style?: StylePropType,
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
    color: Color.brand,
  },
});
