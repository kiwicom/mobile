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
  row: {
    flex: 1,
    flexDirection: 'row',
  },
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
  hotelTitle: {
    flex: 1,
  },
  hotelReviewScore: {
    marginLeft: 10,
    alignSelf: 'center',
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
    const lowResUrl = idx(data, _ => _.hotel.mainPhoto.lowResUrl);

    return (
      <SimpleCard onPress={this.onGoToSingleHotel}>
        <View style={style.row}>
          <View style={style.imageWrapper}>
            <NetworkImage
              style={style.image}
              resizeMode="cover"
              source={{ uri: lowResUrl }}
            />
          </View>
          <View style={style.row}>
            <View style={style.hotelTitle}>
              <HotelTitle data={data} />
            </View>
            <View style={style.hotelReviewScore}>
              <HotelReviewScore hotel={data.hotel} />
            </View>
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
          lowResUrl
        }
        ...HotelReviewScore_hotel
      }
    }
  `,
);
