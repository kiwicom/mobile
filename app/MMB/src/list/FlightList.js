// @flow

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createRefetchContainer } from 'react-relay';
import idx from 'idx';
import { StyleSheet } from '@kiwicom/mobile-shared';

import OneWayFlight from './OneWayFlight';
import ReturnFlight from './ReturnFlight';
import MulticityFlight from './MulticityFlight';
import type { FlightList as FlightListType } from './__generated__/FlightList.graphql';

type Props = {|
  data: FlightListType,
|};

export class FlightList extends React.Component<Props> {
  render = () => {
    const flights = idx(this.props, _ => _.data.edges);

    if (!flights) {
      return null;
    }

    return flights.map(flight => {
      const key = idx(flight, _ => _.node.id);
      const type = idx(flight, _ => _.node.type);
      const variants: Object = {
        ONE_WAY: <OneWayFlight booking={idx(flight, _ => _.node.oneWay)} />,
        RETURN: <ReturnFlight booking={idx(flight, _ => _.node.return)} />,
        MULTICITY: (
          <MulticityFlight booking={idx(flight, _ => _.node.multicity)} />
        ),
      };

      let Component = variants.ONE_WAY;
      if (variants[type]) {
        Component = variants[type];
      }

      return (
        <View key={key} style={styles.itemContainer}>
          {Component}
        </View>
      );
    });
  };
}

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 16,
  },
});

export default createRefetchContainer(
  FlightList,
  graphql`
    fragment FlightList on BookingConnection {
      edges {
        node {
          id
          type
          oneWay {
            ...OneWayFlight_booking
          }
          return {
            ...ReturnFlight_booking
          }
          multicity {
            ...MulticityFlight_booking
          }
        }
      }
    }
  `,
);
