// @flow

import * as React from 'react';
import { View, Animated } from 'react-native';
import { createFragmentContainer, graphql } from 'react-relay';
import { StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {
  VerticalSwipeResponder,
  type OnDimensionsChange,
} from '@kiwicom/react-native-app-common';
import idx from 'idx';

import HotelSwipeItem from './HotelSwipeItem';
import Address from './Address';
import type { HotelSwipeList as HotelSwipeListData } from './__generated__/HotelSwipeList.graphql';

type Props = {|
  data: HotelSwipeListData,
  selectedIndex: number,
  onSnapToItem: (index: number) => void,
  onOpenSingleHotel: (hotelId: string) => void,
|};

type State = {|
  availableWidth: number,
|};

const SNAP_WIDTH = 0.8;
const OPEN_HEIGHT = 150;
const CLOSED_HEIGHT = 80;
const MAX_WIDTH = 668;
const HEIGHT_DIFF = OPEN_HEIGHT - CLOSED_HEIGHT;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    maxWidth: MAX_WIDTH,
    overflow: 'hidden',
  },
  sliderWrapper: {
    height: CLOSED_HEIGHT,
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
  swipeMovement: typeof Animated.Value;
  height: typeof Animated.AnimatedInterpolation;

  constructor(props: Props) {
    super(props);
    this.swipeMovement = new Animated.Value(HEIGHT_DIFF);
    this.height = this.swipeMovement.interpolate({
      inputRange: [-HEIGHT_DIFF, HEIGHT_DIFF],
      outputRange: [OPEN_HEIGHT, CLOSED_HEIGHT],
      extrapolate: 'clamp',
    });

    this.state = {
      availableWidth: Dimensions.get('screen').width,
    };
  }

  componentDidMount = () => {
    Dimensions.addEventListener('change', this.onDimensionsChanged);
  };

  componentWillUnmount = () => {
    Dimensions.removeEventListener('change', this.onDimensionsChanged);
  };

  onDimensionsChanged = ({ screen: { width } }: OnDimensionsChange) => {
    this.setState({ availableWidth: width });
  };

  onSwipeUp = () => {
    Animated.spring(this.swipeMovement, { toValue: -HEIGHT_DIFF }).start();
  };

  onSwipeDown = () => {
    Animated.spring(this.swipeMovement, { toValue: HEIGHT_DIFF }).start();
  };

  getWidth = () => {
    return Math.min(this.state.availableWidth, MAX_WIDTH);
  };

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
    const swipeConfig = {
      directionalOffsetThreshold: 40,
    };

    return (
      <VerticalSwipeResponder
        style={[styles.container, { height: this.height }]}
        onSwipeMove={Animated.event([{ dy: this.swipeMovement }])}
        onSwipeUp={this.onSwipeUp}
        onSwipeDown={this.onSwipeDown}
        config={swipeConfig}
      >
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
      </VerticalSwipeResponder>
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
