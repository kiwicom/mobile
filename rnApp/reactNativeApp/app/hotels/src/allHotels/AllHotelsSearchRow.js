// @flow

import * as React from 'react';
import idx from 'idx';
import { createFragmentContainer, graphql } from 'react-relay';
import { View, StyleSheet } from 'react-native';
import { SimpleCard, NetworkImage } from '@kiwicom/react-native-app-common';

import HotelTitle from './HotelTitle';
import HotelReviewScore from './HotelReviewScore';
import type { AllHotelsSearchRow as AllHotelsSearchRowProps } from './__generated__/AllHotelsSearchRow.graphql';

type Props = {|
  openSingleHotel: (id: string) => void,
  data: AllHotelsSearchRowProps,
|};

const style = StyleSheet.create({
  imageWrapper: {
    paddingHorizontal: 10,
  },
  image: {
    width: 50,
    height: 60,
    borderRadius: 2,
  },
  hotelWrapper: {
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
      <SimpleCard
        separator={false}
        onPress={this.onGoToSingleHotel}
        additionalStyles={{ marginTop: 5, flex: 1, flexDirection: 'row' }}
      >
        <View style={style.imageWrapper}>
          <NetworkImage
            style={style.image}
            resizeMode="cover"
            source={{ uri: thumbnailUrl }}
          />
        </View>
        <View style={style.hotelWrapper}>
          <HotelTitle data={data} />
          <HotelReviewScore hotel={data.hotel} />
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
