// @flow

import * as React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import Color from '../Color';
import Icon from '../Icon';

type Props = {|
  onPress: () => void,
  children: React.Node,
  isChecked?: boolean,
  // $FlowFixMeProps
  style?: Object,
|};

export default function Checkbox(props: Props) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={[styles.wrapper, props.style]}>
        <View style={styles.label}>{props.children}</View>
        {props.isChecked && (
          <View style={styles.check}>
            <Icon name="check" size={26} color={Color.brand} />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 8,
  },
  label: {
    flex: 3,
    justifyContent: 'center',
    height: 26,
  },
  check: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
