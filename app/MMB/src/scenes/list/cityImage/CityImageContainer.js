// @flow strict

import * as React from 'react';
import {
  StyleSheet,
  StretchedImage,
  BlackToAlpha as gradient,
  Touchable,
} from '@kiwicom/mobile-shared';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import {
  type NavigationType,
  withNavigation,
} from '@kiwicom/mobile-navigation';

import FromToRow from './FromToRow';
import DateAndPassengerCount from './DateAndPassengerCount';
import ImageBadges from './ImageBadges';
import CityImage from '../../../components/CityImage';
import BookingDetailContext, {
  type BookingDetail,
} from '../../../context/BookingDetailContext';
import type { CityImage_arrival as ArrivalType } from './__generated__/CityImageContainer_arrival.graphql';
import type { CityImage_departure as DepartureType } from './__generated__/CityImageContainer_departure.graphql';
import type { CityImage_image as ImageType } from './__generated__/CityImageContainer_image.graphql';

type PropsWithContext = {|
  ...Props,
  +setBookingDetail: (booking: BookingDetail) => void,
|};

class CityImageContainer extends React.Component<PropsWithContext> {
  goToDetail = () => {
    const props = this.props;

    const id = props.image.id ?? '';
    const bookingId = props.image?.databaseId ?? 0;
    const isPastBooking = Boolean(props.image?.isPastBooking);
    const arrivalCityId = props.arrival?.cityId ?? '';
    const arrivalTime = props.arrival?.time ?? '';
    const departureTime = props.departure?.time ?? '';
    const authToken = props.image?.authToken ?? '';

    this.props.setBookingDetail({
      id,
      bookingId,
      isPastBooking,
      arrivalCityId,
      authToken,
      arrivalTime: new Date(arrivalTime),
      departureTime: new Date(departureTime),
    });

    this.props.navigation.navigate('DetailScreen');
  };

  render() {
    return (
      <Touchable onPress={this.goToDetail}>
        <View style={styles.container}>
          <CityImage
            style={styles.image}
            url={this.props.image.destinationImageUrl}
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
      <CityImageContainer {...props} setBookingDetail={setBookingDetail} />
    )}
  </BookingDetailContext.Consumer>
);

export default createFragmentContainer(
  withNavigation(CityImageWithContext),
  graphql`
    fragment CityImageContainer_image on BookingInterface {
      id
      databaseId
      passengerCount
      isPastBooking
      destinationImageUrl(dimensions: _375x165)
      authToken
      ...ImageBadges
    }

    fragment CityImageContainer_arrival on RouteStop {
      ...FromToRow_arrival
      cityId
      time
    }

    fragment CityImageContainer_departure on RouteStop {
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
  stretchedImage: {
    width: '100%',
    borderRadius: 4,
  },
  bottomContainer: {
    justifyContent: 'flex-end',
  },
  image: {
    borderRadius: 4,
  },
});
