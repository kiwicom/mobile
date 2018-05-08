// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Text, StyleSheet, Color } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import TravelTypeIcon from './TravelTypeIcon';

type Props = {|
  departureCity: string,
  arrivalCity: string,
  type: string,
|};

export default function FromToRow(props: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.flexItem}>
        <Text style={[styles.text, styles.cityText]}>
          <Translation passThrough={props.departureCity} />
        </Text>
      </View>
      <View style={[styles.flexItem, styles.iconWrapper]}>
        <TravelTypeIcon type={props.type} />
      </View>
      <View style={[styles.flexItem, styles.arrivalWrapper]}>
        <Text style={[styles.text, styles.cityText]}>
          <Translation passThrough={props.arrivalCity} />
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  cityText: {
    fontSize: 16,
    fontWeight: '600',
  },
  text: {
    color: Color.white,
  },
  flexItem: {
    flex: 1,
  },
  iconWrapper: {
    alignItems: 'center',
  },
  arrivalWrapper: {
    alignItems: 'flex-end',
  },
});
