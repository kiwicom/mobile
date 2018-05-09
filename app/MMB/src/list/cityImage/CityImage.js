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
import { DateFormatter } from '@kiwicom/mobile-localization';

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
  type: 'RETURN' | 'ONE_WAY' | 'MULTICITY',
|};

export const CityImage = (props: Props) => {
  const isPastFlight = DateFormatter() > DateFormatter(props.departure.time);
  return (
    <View style={styles.container}>
      {isPastFlight && <View style={[styles.image, styles.imageLayover]} />}
      <NetworkImage
        source={{
          uri: props.image.destinationImageUrl,
        }}
        style={[styles.image, isPastFlight && styles.pastFlightImage]}
        resizeMode="cover"
      />
      {!isPastFlight && (
        <StretchedImage source={gradient} style={styles.stretchedImage} />
      )}
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
};

export default createFragmentContainer(
  CityImage,
  graphql`
    fragment CityImage_image on BookingInterface {
      databaseId
      status
      passengerCount
      destinationImageUrl(dimensions: _375x165)
    }

    fragment CityImage_arrival on RouteStop {
      ...FromToRow_arrival
    }

    fragment CityImage_departure on RouteStop {
      time
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
  pastFlightImage: {
    opacity: 0.35,
  },
  stretchedImage: {
    width: '100%',
    borderRadius: 4,
  },
  bottomContainer: {
    justifyContent: 'flex-end',
  },
  imageLayover: {
    backgroundColor: '#704214',
  },
});
