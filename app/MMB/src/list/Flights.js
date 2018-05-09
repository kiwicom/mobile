// @flow

import * as React from 'react';
import { PrivateApiRenderer } from '@kiwicom/mobile-relay';
import { graphql } from 'react-relay';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, Color } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import type { FlightsQueryResponse } from './__generated__/FlightsQuery.graphql';
import FlightList from './FlightList';

type Props = {||};

export default class Flights extends React.Component<Props> {
  renderInner = (innerProps: FlightsQueryResponse) => (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subtitle}>
        <Translation id="mmb.my_bookings.future_trips" />
      </Text>
      <FlightList data={innerProps.future} />
      <Text style={styles.subtitle}>
        <Translation id="mmb.my_bookings.past_trips" />
      </Text>
      <FlightList data={innerProps.past} />
    </ScrollView>
  );

  render = () => (
    <PrivateApiRenderer
      render={this.renderInner}
      query={graphql`
        query FlightsQuery {
          future: allBookings(only: FUTURE) {
            ...FlightList
          }
          past: allBookings(only: PAST) {
            ...FlightList
          }
        }
      `}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  subtitle: {
    marginTop: 10,
    marginBottom: 12,
    color: Color.textLight,
  },
});
