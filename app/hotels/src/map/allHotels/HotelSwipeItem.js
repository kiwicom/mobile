// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { TouchableOpacity } from 'react-native';
import idx from 'idx';

import HotelDetailPreview from '../HotelDetailPreview';
import type { HotelSwipeItem as HotelSwipeItemData } from './__generated__/HotelSwipeItem.graphql';

type ContainerProps = {|
  width: number,
  onPress: (hotelId: string) => void,
  data: any,
|};

type Props = {
  ...ContainerProps,
  data: ?HotelSwipeItemData,
};

export class HotelSwipeItem extends React.Component<Props> {
  handlePress = () => {
    const { data } = this.props;
    const id = idx(data, _ => _.hotel.id);

    if (id) {
      this.props.onPress(id);
    }
  };

  render = () => {
    const { width, data } = this.props;

    return (
      <TouchableOpacity style={{ width }} onPress={this.handlePress}>
        <HotelDetailPreview availability={data} />
      </TouchableOpacity>
    );
  };
}

export default (createFragmentContainer(
  HotelSwipeItem,
  graphql`
    fragment HotelSwipeItem on HotelAvailability {
      ...HotelDetailPreview_availability
      hotel {
        id
      }
    }
  `,
): React.ComponentType<ContainerProps>);
