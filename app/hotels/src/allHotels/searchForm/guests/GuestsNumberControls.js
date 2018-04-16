// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Color, NumberControl } from '@kiwicom/mobile-shared';

const styles = StyleSheet.create({
  numberPickerContainer: {
    paddingTop: 14,
    paddingRight: 15,
  },
  separator: {
    paddingLeft: 15,
    borderBottomColor: Color.backgroundGray,
    borderBottomWidth: 1,
  },
  numberPicker: {
    marginBottom: 14,
  },
});

type Props = {|
  adultsCount: number,
  childCount: number,
  handleAdultChange: (adultsCount: number) => void,
  handleChildrenChange: (number: number) => void,
|};

export default function GuestsNumberControl(props: Props) {
  return [
    <View key="adults-picker" style={styles.numberPickerContainer}>
      <NumberControl
        label="Adult"
        number={props.adultsCount}
        min={1}
        max={30}
        style={styles.numberPicker}
        icon="person"
        onChange={props.handleAdultChange}
      />
    </View>,
    <View key="separator" style={styles.separator} />,
    <View key="children-picker" style={styles.numberPickerContainer}>
      <NumberControl
        label="Children"
        number={props.childCount}
        min={0}
        max={10}
        icon="child-care"
        onChange={props.handleChildrenChange}
        style={styles.numberPicker}
      />
    </View>,
  ];
}
