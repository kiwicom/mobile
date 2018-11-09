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

import { type RoomConfigurationType } from '../HotelsContext';
import HotelTitle from './HotelTitle';
import HotelReviewScore from '../components/HotelReviewScore';
import type { AllHotelsSearchRow as AllHotelsSearchRowProps } from './__generated__/AllHotelsSearchRow.graphql';
import SingleHotelContext, {
  type ApiProvider,
} from '../navigation/singleHotel/SingleHotelContext';

type PropsWithContext = {|
  ...Props,
  +setHotelId: (hotelId: string) => void,
  +hotelId: string,
  +checkin: Date,
  +checkout: Date,
  +roomsConfiguration: RoomConfigurationType,
  +apiProvider: ApiProvider,
|};

class AllHotelsSearchRow extends React.Component<PropsWithContext> {
  onGoToSingleHotel = () => {
    const hotelId = this.props.data.hotelId;
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

  render = () => {
    const highResUrl = this.props.data.mainPhoto?.highResUrl;
    const children = (
      <View style={style.row}>
        <View style={style.imageContainer}>
          <NetworkImage
            style={style.image}
            resizeMode="cover"
            source={{ uri: highResUrl }}
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
  };
}

type Props = {|
  +navigation: NavigationType,
  +data: AllHotelsSearchRowProps,
  +testID?: string,
|};

class AllHotelsSearchRowWithContext extends React.Component<Props> {
  renderInner = context => <AllHotelsSearchRow {...this.props} {...context} />;

  render = () => (
    <SingleHotelContext.Consumer>
      {this.renderInner}
    </SingleHotelContext.Consumer>
  );
}
export default createFragmentContainer(
  withNavigation(AllHotelsSearchRowWithContext),
  graphql`
    fragment AllHotelsSearchRow on AllHotelsInterface {
      ...HotelTitle
      hotelId
      mainPhoto {
        highResUrl
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
