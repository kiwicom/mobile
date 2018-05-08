// @flow

import * as React from 'react';
import {
  StyleSheet,
  NetworkImage,
  StretchedImage,
  BlackToAlpha as gradient,
} from '@kiwicom/mobile-shared';
import { View } from 'react-native';
import { DateFormatter } from '@kiwicom/mobile-localization';

import FromToRow from './FromToRow';
import DateAndPassengerCount from './DateAndPassengerCount';
import ImageBadges from './ImageBadges';

type Props = {|
  imageUrl: string,
  bookingId: ?number,
  type: string,
  departureCity: string,
  arrivalCity: string,
  date: ?Date,
  status: string,
  passengerCount: ?number,
|};

export default class CityImage extends React.Component<Props> {
  formatDate = () => {
    const { date } = this.props;
    return `${DateFormatter(date).format(
      'ddd',
    )} ${DateFormatter.getLocalizedWithoutYear(date)}`;
  };

  render = () => (
    <View style={styles.container}>
      <NetworkImage
        source={{
          uri: this.props.imageUrl,
        }}
        style={styles.image}
        resizeMode="cover"
      />
      <StretchedImage source={gradient} style={styles.stretchedImage} />
      <View style={[styles.row, styles.padding]}>
        <ImageBadges
          status={this.props.status}
          bookingId={this.props.bookingId}
        />
      </View>
      <View style={[styles.bottomContainer, styles.padding]}>
        <FromToRow
          departureCity={this.props.departureCity}
          arrivalCity={this.props.arrivalCity}
          type={this.props.type}
        />
        <DateAndPassengerCount
          formattedDate={this.formatDate()}
          passengerCount={this.props.passengerCount}
        />
      </View>
    </View>
  );
}

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
