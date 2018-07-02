// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { TextIcon, StyleSheet, Color, Text } from '@kiwicom/mobile-shared';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { SeparatorFullWidth } from '@kiwicom/mobile-navigation';
import idx from 'idx';

import FlightFromTo from './FlightFromTo';
import type { OutboundFlights as OutboundFlightsType } from './__generated__/OutboundFlights.graphql';

type Props = {|
  +data: OutboundFlightsType,
|};

const OutboundFlights = (props: Props) => {
  const outbound = idx(props.data, _ => _.outbound.legs) || [];
  return (
    <React.Fragment>
      <View style={styles.row}>
        <TextIcon code="&#xe079;" style={styles.outboundIcon} />
        <Text style={styles.departureText}>
          <Translation id="mmb.boarding_passes.outbound_flights.departure" />
        </Text>
      </View>
      <View style={styles.separator}>
        <SeparatorFullWidth />
      </View>
      {outbound.map(item => (
        <FlightFromTo data={item} key={idx(item, _ => _.id)} />
      ))}
    </React.Fragment>
  );
};

export default createFragmentContainer(
  OutboundFlights,
  graphql`
    fragment OutboundFlights on BookingReturn {
      outbound {
        legs {
          id
          ...FlightFromTo
        }
      }
    }
  `,
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  separator: {
    marginBottom: 20,
    marginTop: 9,
  },
  departureText: {
    color: Color.textLight,
    fontSize: 12,
    alignSelf: 'center',
  },
  outboundIcon: {
    color: Color.brand,
    transform: [{ rotate: '90deg' }],
    marginEnd: 18,
    fontSize: 18,
  },
});
