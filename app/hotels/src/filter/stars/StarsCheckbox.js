// @flow

import * as React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Color, Stars, Icon } from '@kiwicom/react-native-app-common';

type Props = {|
  onPress: () => void,
  stars?: number,
  isChecked?: boolean,
  text?: string,
  // $FlowFixMeProps
  style?: Object,
|};

export default function StarsCheckbox(props: Props) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={[styles.wrapper, props.style]}>
        <View style={styles.label}>
          {props.stars ? (
            <Text style={styles.stars}>
              <Stars rating={props.stars} />
            </Text>
          ) : (
            <Text style={styles.text}>{props.text}</Text>
          )}
        </View>
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
  stars: {
    fontSize: 16,
    color: Color.brand,
  },
  hotels: {
    marginLeft: 3,
    fontSize: 12,
    color: Color.grey.$600,
  },
  text: {
    marginLeft: 3,
    fontSize: 16,
    fontWeight: '300',
  },
  check: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
