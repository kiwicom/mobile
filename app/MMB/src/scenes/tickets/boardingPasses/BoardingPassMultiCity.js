// @flow strict

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { TextIcon, StyleSheet, Color } from '@kiwicom/mobile-shared';
import idx from 'idx';

import type { BoardingPassMultiCity as BookingType } from './__generated__/BoardingPassMultiCity.graphql';
import FlightSegments from './FlightSegments';

type Props = {|
  +data: BookingType,
|};

const BoardingPassMultiCity = (props: Props) => {
  const trips = idx(props.data, _ => _.trips) || [];
  return trips.map((trip, index) => (
    /* TODO: Icons should change color */
    <FlightSegments
      key={index}
      data={trip}
      icon={<TextIcon code="&#xe079;" style={styles.outboundIcon} />}
      iconTitle={
        <Translation
          passThrough={idx(trip, _ => _.arrival.airport.city.name)}
        />
      }
    />
  ));
};

export default createFragmentContainer(
  BoardingPassMultiCity,
  graphql`
    fragment BoardingPassMultiCity on BookingMulticity {
      trips {
        arrival {
          airport {
            city {
              name
            }
          }
        }
        ...FlightSegments
      }
    }
  `,
);

const styles = StyleSheet.create({
  outboundIcon: {
    color: Color.brand,
    transform: [{ rotate: '90deg' }],
  },
});
