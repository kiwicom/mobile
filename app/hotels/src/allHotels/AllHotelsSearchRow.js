// @flow

import * as React from 'react';
import idx from 'idx';
import { createFragmentContainer, graphql } from 'react-relay';
import { View } from 'react-native';
import {
  SimpleCard,
  NetworkImage,
  StyleSheet,
} from '@kiwicom/react-native-app-shared';

import HotelTitle from './HotelTitle';
import HotelReviewScore from './HotelReviewScore';
import type { AllHotelsSearchRow as AllHotelsSearchRowProps } from './__generated__/AllHotelsSearchRow.graphql';

type Props = {|
  openSingleHotel: (id: string) => void,
  data: AllHotelsSearchRowProps,
|};

const style = StyleSheet.create({
  imageWrapper: {
    paddingRight: 10,
  },
  image: {
    width: 50,
    borderRadius: 2,
    android: {
      height: 80,
    },
    ios: {
      height: 70,
    },
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
});

class AllHotelsSearchRow extends React.Component<Props> {
  onGoToSingleHotel = () => {
    const hotelId = idx(this.props, _ => _.data.hotel.id);
    if (hotelId) {
      this.props.openSingleHotel(hotelId);
    }
  };

  render = () => {
    const { data } = this.props;
    const thumbnailUrl = idx(data, _ => _.hotel.mainPhoto.thumbnailUrl);

    return (
      <SimpleCard onPress={this.onGoToSingleHotel}>
        <View style={style.row}>
          <View style={style.imageWrapper}>
            <NetworkImage
              style={style.image}
              resizeMode="cover"
              source={{ uri: thumbnailUrl }}
            />
          </View>
          <View style={style.row}>
            <HotelTitle data={data} />
            <HotelReviewScore hotel={data.hotel} />
          </View>
        </View>
      </SimpleCard>
    );
  };
}

export default createFragmentContainer(
  AllHotelsSearchRow,
  graphql`
    fragment AllHotelsSearchRow on HotelAvailability {
      ...HotelTitle
      hotel {
        id
        mainPhoto {
          thumbnailUrl
        }
        ...HotelReviewScore_hotel
      }
    }
  `,
);
