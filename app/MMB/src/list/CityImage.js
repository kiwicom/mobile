// @flow

import * as React from 'react';
import {
  StyleSheet,
  NetworkImage,
  Icon,
  Color,
  Text,
  StretchedImage,
  BlackToAlpha as gradient,
} from '@kiwicom/mobile-shared';
import { View } from 'react-native';
import { DateFormatter, Translation } from '@kiwicom/mobile-localization';

import TravelTypeIcon from './TravelTypeIcon';
import ImageBadges from './ImageBadges';

type Props = {|
  imageUrl: string,
  bookingId: string,
  type: string,
  departureCity: string,
  arrivalCity: string,
  date: Date,
  status: string,
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
        <View style={styles.row}>
          <Text style={[styles.text, styles.cityText]}>
            <Translation passThrough={this.props.departureCity} />
          </Text>
          <TravelTypeIcon type={this.props.type} />
          <Text style={[styles.text, styles.cityText]}>
            <Translation passThrough={this.props.arrivalCity} />
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.text, styles.dateText]}>
            <Translation passThrough={this.formatDate()} />
          </Text>
          <View style={styles.row}>
            <Text style={[styles.text, styles.dateText]}>
              <Translation passThrough="2" />
            </Text>
            <Icon
              name="people"
              size={15}
              color={Color.white}
              style={styles.passengerIcon}
            />
          </View>
        </View>
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
  text: {
    color: Color.white,
  },
  cityText: {
    fontSize: 16,
    fontWeight: '600',
  },
  dateText: {
    fontSize: 12,
  },
  passengerIcon: {
    opacity: 1,
  },
});
