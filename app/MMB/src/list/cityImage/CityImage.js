// @flow

import * as React from 'react';
import {
  StyleSheet,
  NetworkImage,
  StretchedImage,
  BlackToAlpha as gradient,
} from '@kiwicom/mobile-shared';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from 'react-relay';

import FromToRow from './FromToRow';
import DateAndPassengerCount from './DateAndPassengerCount';
import ImageBadges from './ImageBadges';
import type { CityImage_arrival as ArrivalType } from './__generated__/CityImage_arrival.graphql';
import type { CityImage_departure as DepartureType } from './__generated__/CityImage_departure.graphql';

type Props = {|
  imageUrl: string,
  bookingId: ?number,
  type: string,
  status: string,
  passengerCount: ?number,
  arrival: ArrivalType,
  departure: DepartureType,
|};

export const CityImage = (props: Props) => (
  <View style={styles.container}>
    <NetworkImage
      source={{
        uri: props.imageUrl,
      }}
      style={styles.image}
      resizeMode="cover"
    />
    <StretchedImage source={gradient} style={styles.stretchedImage} />
    <View style={[styles.row, styles.padding]}>
      <ImageBadges status={props.status} bookingId={props.bookingId} />
    </View>
    <View style={[styles.bottomContainer, styles.padding]}>
      <FromToRow
        departure={props.departure}
        arrival={props.arrival}
        type={props.type}
      />
      <DateAndPassengerCount
        departure={props.departure}
        passengerCount={props.passengerCount}
      />
    </View>
  </View>
);

export default createFragmentContainer(CityImage, {
  arrival: graphql`
    fragment CityImage_arrival on RouteStop {
      ...FromToRow_arrival
    }
  `,
  departure: graphql`
    fragment CityImage_departure on RouteStop {
      ...DateAndPassengerCount_departure
      ...FromToRow_departure
    }
  `,
});

const styles = StyleSheet.create({
  container: {
    height: 152,
    width: '100%',
    justifyContent: 'space-between',
    borderRadius: 4,
  },
  padding: {
    padding: 10,
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 4,
  },
  stretchedImage: {
    width: '100%',
    borderRadius: 4,
  },
  bottomContainer: {
    justifyContent: 'flex-end',
  },
});
