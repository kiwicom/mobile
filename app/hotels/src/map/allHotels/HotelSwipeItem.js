// @flow

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import idx from 'idx';
import { TouchableWithoutFeedback } from '@kiwicom/mobile-shared';

import HotelDetailPreview from '../hotelDetailPreview/HotelDetailPreview';
import type { HotelSwipeItem as HotelSwipeItemData } from './__generated__/HotelSwipeItem.graphql';

type ContainerProps = {|
  width: number,
  onPress: (hotelId: string) => void,
  data: $FlowFixMeProps,
|};

type Props = {
  ...ContainerProps,
  data: ?HotelSwipeItemData,
};

export class HotelSwipeItem extends React.Component<Props> {
  handlePress = () => {
    const { data } = this.props;
    const id = idx(data, _ => _.hotelId);

    if (id) {
      this.props.onPress(id);
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

export default (createFragmentContainer(
  HotelSwipeItem,
  graphql`
    fragment HotelSwipeItem on AllHotelAvailabilityHotel {
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
): React.ComponentType<ContainerProps>);
