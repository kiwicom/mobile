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
import BookingDetailContext from '../../../context/BookingDetailContext';
import type { CityImage_arrival as ArrivalType } from './__generated__/CityImage_arrival.graphql';
import type { CityImage_departure as DepartureType } from './__generated__/CityImage_departure.graphql';
import type { CityImage_image as ImageType } from './__generated__/CityImage_image.graphql';

type PropsWithContext = {|
  ...Props,
  +setBookingDetail: (booking: {|
    isPastBooking: boolean,
    bookingId: string,
    arrivalCityId: string,
    arrivalTime: Date,
    departureTime: Date,
  |}) => void,
|};

class CityImage extends React.Component<PropsWithContext> {
  goToDetail = () => {
    const props = this.props;

    const bookingId = idx(props.image, _ => _.id) || '';
    const isPastBooking = Boolean(idx(props.image, _ => _.isPastBooking));
    const arrivalCityId = idx(props.arrival, _ => _.cityId) || '';
    const arrivalTime = idx(props.arrival, _ => _.time) || '';
    const departureTime = idx(props.departure, _ => _.time) || '';

    this.props.setBookingDetail({
      bookingId: bookingId.toString(),
      isPastBooking,
      arrivalCityId,
      arrivalTime: new Date(arrivalTime),
      departureTime: new Date(departureTime),
    });

    this.props.navigation.navigate({
      routeName: 'DetailScreen',
      key: 'key-DetailScreen',
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
          <ImageBadges data={this.props.image} />
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

type Props = {|
  +image: ImageType,
  +arrival: ArrivalType,
  +departure: DepartureType,
  +type: 'RETURN' | 'ONE_WAY' | 'MULTICITY',
  +navigation: NavigationType,
|};

const CityImageWithContext = (props: Props) => (
  <BookingDetailContext.Consumer>
    {({ actions: { setBookingDetail } }) => (
      <CityImage {...props} setBookingDetail={setBookingDetail} />
    )}
  </BookingDetailContext.Consumer>
);

export default createFragmentContainer(
  withNavigation(CityImageWithContext),
  graphql`
    fragment CityImage_image on BookingInterface {
      id
      passengerCount
      isPastBooking
      destinationImageUrl(dimensions: _375x165)
      ...ImageBadges
    }

    fragment CityImage_arrival on RouteStop {
      ...FromToRow_arrival
      cityId
      time
    }

    fragment CityImage_departure on RouteStop {
      ...DateAndPassengerCount_departure
      ...FromToRow_departure
      time
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
