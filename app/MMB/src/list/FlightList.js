// @flow

import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { graphql, createRefetchContainer } from 'react-relay';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';
import { Text, StyleSheet, Color } from '@kiwicom/mobile-shared';

import OneWayFlight from './OneWayFlight';
import ReturnFlight from './ReturnFlight';
import MulticityFlight from './MulticityFlight';
import type { FlightList as FlightListType } from './__generated__/FlightList.graphql';

type Props = {|
  data: FlightListType,
|};

export class FlightList extends React.Component<Props> {
  renderItem = (item: ?Object) => {
    const type = idx(item, _ => _.node.type) || '';
    const imageUrl = idx(item, _ => _.node.destinationImageUrl);

    let component = null;
    let key = idx(item, _ => _.node.id);

    switch (type) {
      case 'ONE_WAY':
        component = (
          <OneWayFlight
            type={type}
            imageUrl={imageUrl}
            booking={idx(item, _ => _.node.oneWay)}
          />
        );
        break;
      case 'RETURN':
        component = (
          <ReturnFlight
            type={type}
            imageUrl={imageUrl}
            booking={idx(item, _ => _.node.return)}
          />
        );
        break;
      case 'MULTICITY':
        component = (
          <MulticityFlight
            type={type}
            imageUrl={imageUrl}
            booking={idx(item, _ => _.node.multicity)}
          />
        );
        break;
      default:
        break;
    }
    return (
      <View key={key} style={styles.itemContainer}>
        {component}
      </View>
    );
  };

  render = () => {
    const flights = idx(this.props.data, _ => _.allBookings.edges) || [];
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.upcomingText}>
          <Translation id="mmb.my_bookings.future_trips" />
        </Text>
        {flights.map(this.renderItem)}
      </ScrollView>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  itemContainer: {
    marginBottom: 16,
  },
  upcomingText: {
    marginTop: 10,
    marginBottom: 12,
    color: Color.textLight,
  },
});

export default createRefetchContainer(
  FlightList,
  graphql`
    fragment FlightList on RootQuery {
      allBookings {
        edges {
          node {
            id
            destinationImageUrl(dimensions: _375x165)
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
    }
  `,
);
