// @flow

import * as React from 'react';
import {
  StyleSheet,
  NetworkImage,
  StretchedImage,
  BlackToAlpha as gradient,
  Touchable,
} from '@kiwicom/mobile-shared';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import type { NavigationType } from '@kiwicom/mobile-navigation';
import idx from 'idx';

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
  navigation: NavigationType,
|};

class CityImage extends React.Component<Props> {
  goToDetail = () => {
    this.props.navigation.navigate({
      routeName: 'DetailScreen',
      key: 'key-DetailScreen',
      params: {
        bookingId: idx(this.props.image, _ => _.databaseId),
      },
    });
  };

  render = () => (
    <Touchable onPress={this.goToDetail}>
      <View style={styles.container}>
        <NetworkImage
          source={{
            uri: this.props.image.destinationImageUrl,
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <StretchedImage source={gradient} style={styles.stretchedImage} />
        <View style={[styles.row, styles.padding]}>
          <ImageBadges
            status={this.props.image.status}
            bookingId={this.props.image.databaseId}
          />
        </View>
        <View style={[styles.bottomContainer, styles.padding]}>
          <FromToRow
            departure={this.props.departure}
            arrival={this.props.arrival}
            type={this.props.type}
          />
          <DateAndPassengerCount
            departure={this.props.departure}
            passengerCount={this.props.image.passengerCount}
          />
        </View>
      </View>
    </Touchable>
  );
}

export default createFragmentContainer(
  withNavigation(CityImage),
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
    overflow: 'hidden',
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
