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
import type { CityImage_image as ImageType } from './__generated__/CityImage_image.graphql';

type Props = {|
  image: ImageType,
  arrival: ArrivalType,
  departure: DepartureType,
  imageUrl: string,
  type: string,
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
      <ImageBadges
        status={props.image.status}
        bookingId={props.image.databaseId}
      />
    </View>
    <View style={[styles.bottomContainer, styles.padding]}>
      <FromToRow
        departure={props.departure}
        arrival={props.arrival}
        type={props.type}
      />
      <DateAndPassengerCount
        departure={props.departure}
        passengerCount={props.image.passengerCount}
      />
    </View>
  </View>
);

export default createFragmentContainer(
  CityImage,
  graphql`
    fragment CityImage_image on BookingInterface {
      databaseId
      status
      passengerCount
    }

    fragment CityImage_arrival on RouteStop {
      ...FromToRow_arrival
    }

    fragment CityImage_departure on RouteStop {
      ...DateAndPassengerCount_departure
      ...FromToRow_departure
    }
  `,
);

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
