// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import {
  withNavigation,
  type NavigationType,
} from '@kiwicom/mobile-navigation';
import {
  TouchableWithoutFeedback,
  Dimensions,
  Device,
} from '@kiwicom/mobile-shared';

import { type HotelsContextState, HotelsContext } from '../../HotelsContext';
import HotelDetailPreview from '../hotelDetailPreview/HotelDetailPreview';
import type { HotelSwipeItem_data as HotelSwipeItemData } from './__generated__/HotelSwipeItem_data.graphql';

type PropsWithContext = {|
  ...Props,
  +deviceWidth: number,
|};

export function HotelSwipeItemWithContext(props: PropsWithContext) {
  const {
    setHotelId,
    checkin,
    checkout,
    roomsConfiguration,
  }: HotelsContextState = React.useContext(HotelsContext);

  function openSingleHotel(hotelId: string) {
    setHotelId(hotelId);
    props.navigation.navigate('SingleHotel', {
      hotelId,
      checkin,
      checkout,
      roomsConfiguration,
    });
  }

  function handlePress() {
    const id = props.data?.hotelId;
    const isNarrowLayout = props.deviceWidth < Device.DEVICE_THRESHOLD;

    if (id != null && isNarrowLayout) {
      openSingleHotel(id);
    } else if (id != null && !isNarrowLayout) {
      setHotelId(id);
    }
  }

  const name = props.data?.name;
  const price = props.data?.money;
  const thumbnailUrl = props.data?.mainPhoto?.thumbnailUrl;
  const stars = props.data?.rating?.stars;
  const score = props.data?.review?.score;
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={{ width: props.width }}>
        <HotelDetailPreview
          name={name}
          amount={price?.amount}
          currency={price?.currencyId}
          thumbnailUrl={thumbnailUrl}
          stars={stars}
          score={score}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

type Props = {|
  +width: number,
  +navigation: NavigationType,
  +data: ?HotelSwipeItemData,
|};

class HotelSwipeItem extends React.Component<Props> {
  renderDimensions = ({ width }) => {
    return <HotelSwipeItemWithContext {...this.props} deviceWidth={width} />;
  };

  render() {
    return <Dimensions.Consumer>{this.renderDimensions}</Dimensions.Consumer>;
  }
}

export default createFragmentContainer(withNavigation(HotelSwipeItem), {
  data: graphql`
    fragment HotelSwipeItem_data on AllHotelsInterface {
      hotelId
      name
      money {
        currencyId
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
});
