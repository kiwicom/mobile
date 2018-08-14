// @flow

import * as React from 'react';
import idx from 'idx';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import {
  SimpleCard,
  NetworkImage,
  StyleSheet,
  Color,
  Touchable,
} from '@kiwicom/mobile-shared';

import HotelTitle from './HotelTitle';
import HotelReviewScore from './HotelReviewScore';
import type { AllHotelsSearchRow as AllHotelsSearchRowProps } from './__generated__/AllHotelsSearchRow.graphql';
import HotelsContext from '../HotelsContext';

type PropsWithContext = {|
  ...Props,
  +isNew: boolean,
|};

class AllHotelsSearchRow extends React.Component<PropsWithContext> {
  onGoToSingleHotel = () => {
    const hotelId = idx(this.props, _ => _.data.hotel.id);
    if (hotelId) {
      this.props.openSingleHotel(hotelId);
    }
  };

  renderNew = () => {
    const lowResUrl = idx(this.props.data, _ => _.hotel.mainPhoto.lowResUrl);

    return (
      <Touchable onPress={this.onGoToSingleHotel} style={newStyles.container}>
        <View style={style.row}>
          <View style={newStyles.imageContainer}>
            <NetworkImage
              style={style.image}
              resizeMode="cover"
              source={{ uri: lowResUrl }}
            />
          </View>
          <View style={newStyles.content}>
            <View style={newStyles.hotelTitleWrapper}>
              <View style={style.hotelTitle}>
                <HotelTitle data={this.props.data} />
              </View>
              <View style={newStyles.hotelReviewScore}>
                <HotelReviewScore hotel={idx(this.props.data, _ => _.hotel)} />
              </View>
            </View>
          </View>
        </View>
      </Touchable>
    );
  };

  render = () => {
    const { data, isNew } = this.props;
    if (isNew) {
      return this.renderNew();
    }
    const lowResUrl = idx(data, _ => _.hotel.mainPhoto.lowResUrl);
    return (
      <SimpleCard onPress={this.onGoToSingleHotel} style={style.cardStyle}>
        <View style={style.row}>
          <NetworkImage
            style={style.image}
            resizeMode="cover"
            source={{ uri: lowResUrl }}
          />

          <View style={style.hotelTitleWrapper}>
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

type Props = {|
  +openSingleHotel: (id: string) => void,
  +data: AllHotelsSearchRowProps,
|};

const AllHotelsSearchRowWithContext = (props: Props) => (
  <HotelsContext.Consumer>
    {({ isNew }) => <AllHotelsSearchRow {...props} isNew={isNew} />}
  </HotelsContext.Consumer>
);

export default createFragmentContainer(
  AllHotelsSearchRowWithContext,
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

const newStyles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    paddingTop: 8,
    paddingStart: 8,
  },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Color.ink.lighter,
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
  hotelTitleWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  hotelTitle: {
    flex: 1,
  },
  hotelReviewScore: {
    marginStart: 10,
  },
  cardStyle: {
    marginVertical: 0,
    marginBottom: 5,
  },
});
