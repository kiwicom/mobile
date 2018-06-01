// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/mobile-shared';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import Passenger from './Passenger';
import type { PassengerMenuDetail as Booking } from './__generated__/PassengerMenuDetail.graphql';

type Props = {|
  +data: Booking,
|};

const PassengerMenuDetail = (props: Props) => {
  const passengers = idx(props.data, _ => _.passengers) || [];

  return (
    <View style={styles.container}>
      {passengers.map(passenger => (
        <Passenger data={passenger} key={idx(passenger, _ => _.databaseId)} />
      ))}
    </View>
  );
};

export default createFragmentContainer(
  PassengerMenuDetail,
  graphql`
    fragment PassengerMenuDetail on Booking {
      passengers {
        databaseId
        ...Passenger
      }
    }
  `,
);

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
