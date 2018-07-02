// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Text, StyleSheet, Icon, Color } from '@kiwicom/mobile-shared';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import type { DateAndPassengerCount_departure as DepartureType } from './__generated__/DateAndPassengerCount_departure.graphql';

type Props = {|
  +departure: DepartureType,
  +passengerCount: ?number,
|};

export const DateAndPassengerCount = (props: Props) => {
  let departureDate = idx(props, _ => _.departure.time);
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
        <Icon name="people" size={15} color={Color.white} />
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
  },
  text: {
    color: Color.white,
    fontSize: 12,
  },
  passengersText: {
    marginEnd: 3,
  },
});
