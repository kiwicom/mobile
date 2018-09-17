// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { PublicApiRenderer, graphql } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { StyleSheet } from '@kiwicom/mobile-shared';
import idx from 'idx';

import type { FlightQueryResponse } from './__generated__/FlightQuery.graphql';
import OneWayFlight from './OneWayFlight';
import ReturnFlight from './ReturnFlight';
import MulticityFlight from './MulticityFlight';
import FlightListLayout from './FlightListLayout';
import FlightItemLayout from './FlightItemLayout';

type Props = {|
  +bookingId: number,
  +simpleToken: string,
|};

type BookingTypes = {|
  +BookingOneWay: React.Node,
  +BookingReturn: React.Node,
  +BookingMulticity: React.Node,
  +'': null,
|};

export default class Flight extends React.Component<Props> {
  renderInner = (renderProps: FlightQueryResponse) => {
    const isPastBooking = idx(renderProps.singleBooking, _ => _.isPastBooking);
    const type = idx(renderProps.singleBooking, _ => _.__typename) || '';
    const types: BookingTypes = {
      BookingOneWay: <OneWayFlight booking={renderProps.singleBooking} />,
      BookingReturn: <ReturnFlight booking={renderProps.singleBooking} />,
      BookingMulticity: <MulticityFlight booking={renderProps.singleBooking} />,
      '': null,
    };
    return (
      <View style={styles.container}>
        <FlightListLayout
          title={
            <Translation
              id={
                isPastBooking != null
                  ? 'mmb.my_bookings.past_trips'
                  : 'mmb.my_bookings.future_trips'
              }
            />
          }
          content={<FlightItemLayout>{types[type]}</FlightItemLayout>}
        />
      </View>
    );
  };

  render = () => (
    <PublicApiRenderer
      query={graphql`
        query FlightQuery($id: Int!, $authToken: String!) {
          singleBooking(id: $id, authToken: $authToken) {
            ... on BookingInterface {
              __typename
              isPastBooking
            }
            ... on BookingOneWay {
              ...OneWayFlight_booking
            }
            ... on BookingReturn {
              ...ReturnFlight_booking
            }
            ... on BookingMulticity {
              ...MulticityFlight_booking
            }
          }
        }
      `}
      variables={{
        id: this.props.bookingId,
        authToken: this.props.simpleToken,
      }}
      render={this.renderInner}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
