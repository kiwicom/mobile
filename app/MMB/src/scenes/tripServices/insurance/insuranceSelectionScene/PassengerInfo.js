// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { Text, StyleSheet } from '@kiwicom/mobile-shared';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

export type Props = {|
  +title: string,
  +fullName: string,
  +birthday: Date | null,
|};

const PassengerInfo = ({ fullName, birthday }: Props) => (
  <View style={styles.passenger}>
    <Translation passThrough={fullName} />
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
  passengerBirthday: {
    color: defaultTokens.paletteInkNormal,
  },
});
