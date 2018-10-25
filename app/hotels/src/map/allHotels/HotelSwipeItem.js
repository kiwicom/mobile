// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import idx from 'idx';
import {
  withNavigation,
  type NavigationType,
} from '@kiwicom/mobile-navigation';
import {
  TouchableWithoutFeedback,
  Dimensions,
  Device,
} from '@kiwicom/mobile-shared';

import { type RoomConfigurationType } from '../../HotelsContext';
import SingleHotelContext from '../../navigation/singleHotel/SingleHotelContext';
import HotelDetailPreview from '../hotelDetailPreview/HotelDetailPreview';
import type { HotelSwipeItem as HotelSwipeItemData } from './__generated__/HotelSwipeItem.graphql';

type PropsWithContext = {|
  ...Props,
  +deviceWidth: number,
  +setHotelId: (hotelId: string) => void,
  +hotelId: string,
  +checkin: Date,
  +checkout: Date,
  +roomsConfiguration: RoomConfigurationType,
|};

export class HotelSwipeItemWithContext extends React.Component<
  PropsWithContext,
> {
  openSingleHotel = (hotelId: string) => {
    this.props.navigation.navigate('SingleHotel', {
      hotelId,
      checkin: this.props.checkin,
      checkout: this.props.checkout,
      roomsConfiguration: this.props.roomsConfiguration,
    });
  };

  isNarrowLayout = () => {
    return this.props.deviceWidth < Device.DEVICE_THRESHOLD;
  };

  handlePress = () => {
    const { data } = this.props;
    const id = idx(data, _ => _.hotelId);

    if (id != null) {
      this.isNarrowLayout()
        ? this.openSingleHotel(id)
        : this.props.setHotelId(id);
    }
  };

  render = () => {
    const { width, data } = this.props;
    const name = idx(data, _ => _.name);
    const price = idx(data, _ => _.price);
    const thumbnailUrl = idx(data, _ => _.mainPhoto.thumbnailUrl);
    const stars = idx(data, _ => _.rating.stars);
    const score = idx(data, _ => _.review.score);
    return (
      <TouchableWithoutFeedback onPress={this.handlePress}>
        <View style={{ width }}>
          <HotelDetailPreview
            name={name}
            price={price}
            thumbnailUrl={thumbnailUrl}
            stars={stars}
            score={score}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  };
}

type Props = {|
  +width: number,
  +navigation: NavigationType,
  +data: ?HotelSwipeItemData,
|};

const HotelSwipeItem = (props: Props) => (
  <Dimensions.Consumer>
    {({ width }) => (
      <SingleHotelContext.Consumer>
        {context => {
          return (
            <HotelSwipeItemWithContext
              {...props}
              {...context}
              deviceWidth={width}
            />
          );
        }}
      </SingleHotelContext.Consumer>
    )}
  </Dimensions.Consumer>
);

export default createFragmentContainer(
  withNavigation(HotelSwipeItem),
  graphql`
    fragment HotelSwipeItem on AllHotelsInterface {
      hotelId
      name
      price {
        currency
        amount
      }
      mainPhoto {
        thumbnailUrl
      }
      rating {
        stars
      }
      review {
        score
      }
    }
  `,
);
