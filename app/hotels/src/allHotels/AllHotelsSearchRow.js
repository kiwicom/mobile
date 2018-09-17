// @flow strict

import * as React from 'react';
import idx from 'idx';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { NetworkImage, StyleSheet, Touchable } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import HotelTitle from './HotelTitle';
import HotelReviewScore from './HotelReviewScore';
import type { AllHotelsSearchRow as AllHotelsSearchRowProps } from './__generated__/AllHotelsSearchRow.graphql';

type Props = {|
  +openSingleHotel: (id: string) => void,
  +data: AllHotelsSearchRowProps,
|};

class AllHotelsSearchRow extends React.Component<Props> {
  onGoToSingleHotel = () => {
    const hotelId = idx(this.props, _ => _.data.hotel.id);
    if (hotelId) {
      this.props.openSingleHotel(hotelId);
    }
  };

  render = () => {
    const lowResUrl = idx(this.props.data, _ => _.hotel.mainPhoto.lowResUrl);

    return (
      <Touchable
        onPress={this.onGoToSingleHotel}
        style={style.container}
        delayPressIn={100}
      >
        <View style={style.row}>
          <View style={style.imageContainer}>
            <NetworkImage
              style={style.image}
              resizeMode="cover"
              source={{ uri: lowResUrl }}
            />
          </View>
          <View style={style.content}>
            <View style={style.hotelTitleWrapper}>
              <View style={style.hotelTitle}>
                <HotelTitle data={this.props.data} />
              </View>
              <View style={style.hotelReviewScore}>
                <HotelReviewScore hotel={idx(this.props.data, _ => _.hotel)} />
              </View>
            </View>
          </View>
        </View>
      </Touchable>
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

const style = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  image: {
    marginEnd: 10,
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
  container: {
    backgroundColor: defaultTokens.paletteWhite,
    paddingTop: 8,
    paddingStart: 8,
  },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: defaultTokens.paletteInkLighter,
  },
  imageContainer: {
    marginBottom: 8,
  },
  hotelReviewScore: {
    marginEnd: 8,
    marginStart: 10,
    alignSelf: 'center',
  },
  hotelTitleWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingBottom: 8,
  },
});
