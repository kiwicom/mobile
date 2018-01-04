// @flow

import * as React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Color } from '@kiwicom/react-native-app-common';

type Props = {|
  stars?: number,
  hotels: number,
  isChecked?: boolean,
  text?: string,
  style?: Object,
  onPress: () => void,
|};

export default function StarsCheckbox(props: Props) {
  const stars = [];
  if (props.stars) {
    for (let i = 0; i < props.stars; i++) {
      stars.push(
        <MaterialIcons key={i} name="star" size={16} color={Color.brand} />,
      );
    }
  }

  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={[styles.wrapper, props.style]}>
        <View style={styles.label}>
          {props.stars ? (
            <View style={styles.stars}>{stars}</View>
          ) : (
            <Text style={styles.text}>{props.text}</Text>
          )}
          <Text style={styles.hotels}>
            {props.hotels} hotel{props.hotels === 1 ? '' : 's'}
          </Text>
        </View>
        {props.isChecked && (
          <View style={styles.check}>
            <MaterialIcons name="check" size={26} color={Color.brand} />
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
  },
  stars: {
    flexDirection: 'row',
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
