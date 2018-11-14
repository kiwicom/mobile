// @flow strict

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { TextIcon, StyleSheet, Color } from '@kiwicom/mobile-shared';
import last from 'lodash/last';

import type { BoardingPassMultiCity as BookingType } from './__generated__/BoardingPassMultiCity.graphql';
import FlightSegments from './FlightSegments';

type Props = {|
  +data: BookingType,
|};

export const BoardingPassMultiCity = (props: Props) => {
  const trips = props.data.trips ?? [];
  return trips.map<React.Element<typeof FlightSegments>>((trip, index) => {
    const color = Color.tripColorCodes[index] || last(Color.tripColorCodes); // if we have more trips than colors, fallback to last color code
    const styles = StyleSheet.create({
      textIcon: {
        color,
      },
    });
    return (
      <FlightSegments
        key={index}
        data={trip}
        icon={<TextIcon code="&#xe103;" style={styles.textIcon} />}
        iconTitle={
          <Translation passThrough={trip?.arrival?.airport?.city?.name} />
        }
      />
    );
  });
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
