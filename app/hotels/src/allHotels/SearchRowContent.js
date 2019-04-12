// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, NetworkImage } from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import HotelTitle from './HotelTitle';
import HotelReviewScore from '../components/HotelReviewScore';
import type { SearchRowContent_hotel as HotelType } from './__generated__/SearchRowContent_hotel.graphql';

type Props = {|
  +hotel: ?HotelType,
|};

const SearchRowContent = (props: Props) => {
  const highResUrl = props.hotel?.mainPhoto?.highResUrl;
  const imageUrl = props.hotel?.mainPhoto?.lowResUrl ?? highResUrl; // stay 22 don't provide lowResUrl, thumbnail url has to low quality, fallback to highResUrl
  return (
    <View style={style.row}>
      <View style={style.imageContainer}>
        <NetworkImage
          style={style.image}
          resizeMode="cover"
          source={{ uri: imageUrl }}
        />
      </View>
      <View style={style.content}>
        <View style={style.hotelTitleWrapper}>
          <View style={style.hotelTitle}>
            <HotelTitle data={props.hotel} />
          </View>
          <View style={style.hotelReviewScore}>
            <HotelReviewScore score={props.hotel?.review?.score} />
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  image: {
    marginStart: 16,
    marginEnd: 12,
    width: 56,
    borderRadius: 3,
    backgroundColor: defaultTokens.paletteCloudLight,
    height: 72,
  },
  hotelTitle: {
    flex: 1,
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

export default createFragmentContainer(SearchRowContent, {
  hotel: graphql`
    fragment SearchRowContent_hotel on AllHotelsInterface {
      ...HotelTitle_data
      mainPhoto {
        highResUrl
        lowResUrl
      }
      review {
        score
      }
    }
  `,
});
