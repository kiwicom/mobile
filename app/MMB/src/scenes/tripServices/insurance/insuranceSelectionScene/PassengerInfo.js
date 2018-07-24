// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Text, StyleSheet, Color } from '@kiwicom/mobile-shared';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';

export type Props = {|
  +title: string,
  +fullName: string,
  +birthday: Date | null,
|};

const PassengerInfo = ({ title, fullName, birthday }: Props) => (
  <View style={styles.passenger}>
    <Text style={styles.passengerText}>
      <Translation passThrough={`${title}. ${fullName}`} />
    </Text>
    {birthday !== null && (
      <Text style={[styles.passengerText, styles.passengerBirthday]}>
        <Translation
          passThrough={DateFormatter(new Date(birthday)).formatToBirthday()}
        />
      </Text>
    )}
  </View>
);

export default PassengerInfo;

const styles = StyleSheet.create({
  passenger: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 10,
  },
  passengerText: {
    fontSize: 12,
  },
  passengerBirthday: {
    color: Color.textLight,
  },
});
