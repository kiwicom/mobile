// @flow strict

import * as React from 'react';
import idx from 'idx';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import {
  NetworkImage,
  StyleSheet,
  Touchable,
  AdaptableLayout,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import HotelTitle from './HotelTitle';
import HotelReviewScore from '../components/HotelReviewScore';
import type { AllHotelsSearchRow as AllHotelsSearchRowProps } from './__generated__/AllHotelsSearchRow.graphql';
import SingleHotelContext from '../navigation/singleHotel/SingleHotelContext';

type PropsWithContext = {|
  ...Props,
  +setHotelId: (hotelId: string) => void,
|};

class AllHotelsSearchRow extends React.Component<PropsWithContext> {
  onGoToSingleHotel = () => {
    const hotelId = idx(this.props, _ => _.data.hotelId);
    if (hotelId != null) {
      this.props.openSingleHotel(hotelId);
    }
  };

  setActiveHotelId = () => {
    const hotelId = idx(this.props, _ => _.data.hotelId) || '';
    this.props.setHotelId(hotelId);
  };

  render = () => {
    const lowResUrl = idx(this.props.data, _ => _.mainPhoto.lowResUrl);
    const children = (
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
              <HotelReviewScore
                score={idx(this.props.data, _ => _.review.score)}
              />
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
          >
            {children}
          </Touchable>
        }
        renderOnWide={
          <Touchable
            onPress={this.setActiveHotelId}
            style={style.container}
            delayPressIn={100}
          >
            {children}
          </Touchable>
        }
      />
    );
  };
}

type Props = {|
  +openSingleHotel: (id: string) => void,
  +data: AllHotelsSearchRowProps,
|};

const AllHotelsSearchRowWithContext = (props: Props) => (
  <SingleHotelContext.Consumer>
    {({ setHotelId }) => (
      <AllHotelsSearchRow {...props} setHotelId={setHotelId} />
    )}
  </SingleHotelContext.Consumer>
);

export default createFragmentContainer(
  AllHotelsSearchRowWithContext,
  graphql`
    fragment AllHotelsSearchRow on AllHotelAvailabilityHotel {
      ...HotelTitle
      hotelId
      mainPhoto {
        lowResUrl
      }
      review {
        score
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
