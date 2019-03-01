// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import {
  NetworkImage,
  StyleSheet,
  Touchable,
  AdaptableLayout,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import {
  withNavigation,
  type NavigationType,
} from '@kiwicom/mobile-navigation';

import {
  type RoomConfigurationType,
  type ApiProvider,
  type HotelsContextState,
  withHotelsContext,
} from '../HotelsContext';
import HotelTitle from './HotelTitle';
import HotelReviewScore from '../components/HotelReviewScore';
import type { AllHotelsSearchRow_data as AllHotelsSearchRowProps } from './__generated__/AllHotelsSearchRow_data.graphql';

type Props = {|
  +navigation: NavigationType,
  +data: AllHotelsSearchRowProps,
  +testID?: string,
  +setHotelId: (hotelId: string) => void,
  +hotelId: string,
  +checkin: Date,
  +checkout: Date,
  +roomsConfiguration: RoomConfigurationType,
  +apiProvider: ApiProvider,
|};

class AllHotelsSearchRow extends React.Component<Props> {
  onGoToSingleHotel = () => {
    const { hotelId } = this.props.data;

    if (hotelId != null) {
      this.props.setHotelId(hotelId);

      this.props.navigation.navigate('SingleHotel', {
        checkin: this.props.checkin,
        checkout: this.props.checkout,
        roomsConfiguration: this.props.roomsConfiguration,
        apiProvider: this.props.apiProvider,
      });
    }
  };

  setActiveHotelId = () => {
    const hotelId = this.props.data.hotelId ?? '';
    this.props.setHotelId(hotelId);
  };

  render() {
    const highResUrl = this.props.data.mainPhoto?.highResUrl;
    const imageUrl = this.props.data.mainPhoto?.lowResUrl ?? highResUrl; // stay 22 don't provide lowResUrl, thumbnail url has to low quality, fallback to highResUrl
    const children = (
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
              <HotelTitle data={this.props.data} />
            </View>
            <View style={style.hotelReviewScore}>
              <HotelReviewScore score={this.props.data.review?.score} />
            </View>
          </View>
        </View>
      </View>
    );
    return (
      <AdaptableLayout
        renderOnNarrow={
          <Touchable
            onPress={this.onGoToSingleHotel}
            style={style.container}
            delayPressIn={100}
            testID={this.props.testID}
          >
            {children}
          </Touchable>
        }
        renderOnWide={
          <Touchable
            onPress={this.setActiveHotelId}
            style={style.container}
            delayPressIn={100}
            testID={this.props.testID}
          >
            {children}
          </Touchable>
        }
      />
    );
  }
}

const select = ({
  setHotelId,
  checkin,
  checkout,
  roomsConfiguration,
  apiProvider,
}: HotelsContextState) => ({
  setHotelId,
  checkin,
  checkout,
  roomsConfiguration,
  apiProvider,
});

export default createFragmentContainer(
  withHotelsContext(select)(withNavigation(AllHotelsSearchRow)),
  {
    data: graphql`
      fragment AllHotelsSearchRow_data on AllHotelsInterface {
        ...HotelTitle_data
        hotelId
        mainPhoto {
          highResUrl
          lowResUrl
        }
        review {
          score
        }
      }
    `,
  },
);

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
  container: {
    backgroundColor: defaultTokens.paletteWhite,
    paddingTop: 8,
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
