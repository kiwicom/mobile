// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { Text, StyleSheet, TextIcon } from '@kiwicom/mobile-shared';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { DateAndPassengerCount_departure as DepartureType } from './__generated__/DateAndPassengerCount_departure.graphql';

type Props = {|
  +departure: DepartureType,
  +passengerCount: ?number,
|};

export const DateAndPassengerCount = (props: Props) => {
  let departureDate = props.departure.time;
  if (departureDate) {
    departureDate = DateFormatter(new Date(departureDate)).formatToDate();
  }

  return (
    <View style={styles.row}>
      <Text style={styles.text}>
        <Translation passThrough={departureDate} />
      </Text>
      <View style={styles.row}>
        <Text style={[styles.text, styles.passengersText]}>
          <Translation passThrough={props.passengerCount} />
        </Text>
        <TextIcon code="(" style={styles.icon} />
      </View>
    </View>
  );
};

export default createFragmentContainer(
  DateAndPassengerCount,
  graphql`
    fragment DateAndPassengerCount_departure on RouteStop {
      time
    }
  `,
);

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: defaultTokens.paletteWhite,
    fontSize: 12,
  },
  passengersText: {
    marginEnd: 3,
  },
  icon: {
    fontSize: 14,
    color: defaultTokens.paletteWhite,
  },
});
