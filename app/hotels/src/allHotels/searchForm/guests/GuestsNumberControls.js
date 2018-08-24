// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, NumberControl } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +adultsCount: number,
  +childCount: number,
  +handleAdultChange: (adultsCount: number) => void,
  +handleChildrenChange: (number: number) => void,
|};

export default function GuestsNumberControl(props: Props) {
  return (
    <React.Fragment>
      <View style={styles.numberPickerContainer}>
        <NumberControl
          label={
            <Translation id="hotels_search.guests_number_controls.adults" />
          }
          number={props.adultsCount}
          min={1}
          max={30}
          style={styles.numberPicker}
          icon="person"
          onChange={props.handleAdultChange}
        />
      </View>
      <View style={styles.separator} />
      <View style={styles.numberPickerContainer}>
        <NumberControl
          label={
            <Translation id="hotels_search.guests_number_controls.children" />
          }
          number={props.childCount}
          min={0}
          max={10}
          icon="child-care"
          onChange={props.handleChildrenChange}
          style={styles.numberPicker}
        />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  numberPickerContainer: {
    paddingTop: 14,
    paddingEnd: 15,
  },
  separator: {
    paddingStart: 15,
    borderBottomColor: defaultTokens.paletteCloudLight,
    borderBottomWidth: 1,
  },
  numberPicker: {
    marginBottom: 14,
  },
});
