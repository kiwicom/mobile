// @flow

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from 'react-relay';
import { StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {
  BottomSheet,
  Device,
  type OnDimensionsChange,
} from '@kiwicom/react-native-app-common';
import idx from 'idx';

import HotelSwipeItem from './HotelSwipeItem';
import Address from './Address';
import type { HotelSwipeList as HotelSwipeListData } from './__generated__/HotelSwipeList.graphql';
import { getWidth, openHeight, closedHeight } from '../bottomSheetDimensions';

type Props = {|
  data: HotelSwipeListData,
  selectedIndex: number,
  onSnapToItem: (index: number) => void,
  onOpenSingleHotel: (hotelId: string) => void,
|};

type State = {|
  screenWidth: number,
|};

const SNAP_WIDTH = 0.8;

const styles = StyleSheet.create({
  sliderWrapper: {
    height: closedHeight,
  },
  slider: {
    paddingTop: 5,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  handler: {
    borderBottomWidth: 2,
    borderBottomColor: '#edeff2',
    alignSelf: 'center',
    width: 100,
    marginTop: 3,
  },
});

class HotelSwipeList extends React.Component<Props, State> {
  isTablet: boolean;

  constructor(props: Props) {
    super(props);
    this.isTablet = Device.isTablet();

    this.state = {
      screenWidth: Dimensions.get('screen').width,
    };
  }

  componentDidMount = () => {
    Dimensions.addEventListener('change', this.onDimensionsChanged);
  };

  componentWillUnmount = () => {
    Dimensions.removeEventListener('change', this.onDimensionsChanged);
  };

  onDimensionsChanged = ({ screen: { width } }: OnDimensionsChange) => {
    this.setState({ screenWidth: width });
  };

  getWidth = () => getWidth(this.state.screenWidth, this.isTablet);

  getCardItemWidth = () => {
    return this.getWidth() * SNAP_WIDTH;
  };

  getSelectedAddress = () => {
    const { selectedIndex, data } = this.props;

    return idx(data, _ => _[selectedIndex].node.hotel.address) || {};
  };

  renderItem = ({ item }: { item: Object, index: number }) => {
    const { onOpenSingleHotel } = this.props;

    return (
      <HotelSwipeItem
        width={this.getCardItemWidth()}
        data={item.node}
        onPress={onOpenSingleHotel}
      />
    );
  };

  render = () => {
    const { data, selectedIndex, onSnapToItem } = this.props;

    return (
      <View style={{ maxWidth: this.getWidth() }}>
        <BottomSheet openHeight={openHeight} closedHeight={closedHeight}>
          <View style={styles.handler} />
          <View style={styles.sliderWrapper}>
            <Carousel
              data={data}
              renderItem={this.renderItem}
              sliderWidth={this.getWidth()}
              itemWidth={this.getCardItemWidth()}
              firstItem={selectedIndex}
              inactiveSlideScale={1}
              inactiveSlideOpacity={0.5}
              decelerationRate="fast"
              activeSlideAlignment="start"
              containerCustomStyle={styles.slider}
              removeClippedSubviews={false}
              onSnapToItem={onSnapToItem}
            />
          </View>
          <Address data={this.getSelectedAddress()} />
        </BottomSheet>
      </View>
    );
  };
}

export default createFragmentContainer(
  HotelSwipeList,
  graphql`
    fragment HotelSwipeList on HotelAvailabilityEdge @relay(plural: true) {
      node {
        id
        ...HotelSwipeItem
        hotel {
          address {
            ...Address
          }
        }
      }
    }
  `,
);
