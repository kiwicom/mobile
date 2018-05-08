// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Text, StyleSheet, Icon, Color } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

type Props = {|
  formattedDate: string,
  passengerCount: ?number,
|};

export default function DateAndPassengerCount(props: Props) {
  return (
    <View style={styles.row}>
      <Text style={[styles.text, styles.dateText]}>
        <Translation passThrough={props.formattedDate} />
      </Text>
      <View style={styles.row}>
        <Text style={[styles.text, styles.dateText]}>
          <Translation passThrough={props.passengerCount} />
        </Text>
        <Icon
          name="people"
          size={15}
          color={Color.white}
          style={styles.passengerIcon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    color: Color.white,
  },

  dateText: {
    fontSize: 12,
    opacity: 0.7,
  },
  passengerIcon: {
    opacity: 0.7,
  },
});
