// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/mobile-shared';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import Passenger from './Passenger';
import Visa from './Visa';
import type { PassengerMenuDetail as Booking } from './__generated__/PassengerMenuDetail.graphql';

type Props = {|
  +data: Booking,
|};

const PassengerMenuDetail = (props: Props) => {
  const passengers = idx(props.data, _ => _.passengers) || [];

  return (
    <React.Fragment>
      <View style={styles.container}>
        {passengers.map(passenger => (
          <Passenger data={passenger} key={idx(passenger, _ => _.databaseId)} />
        ))}
      </View>
      <Visa data={props.data} />
    </React.Fragment>
  );
};

export default createFragmentContainer(
  PassengerMenuDetail,
  graphql`
    fragment PassengerMenuDetail on BookingInterface {
      ...Visa
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
