// @flow

import * as React from 'react';
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
|};

type State = {|
  availableWidth: number,
  open: boolean,
|};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  slider: {
    padding: 10,
  },
});

const SNAP_WIDTH = 0.8;
const OPEN_HEIGHT = 150;
const CLOSED_HEIGHT = 80;

class HotelSwipeList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      availableWidth: Dimensions.get('screen').width,
      open: false,
    };
  }

  componentDidMount = () => {
    Dimensions.addEventListener('change', this.onDimensionsChanged);
  };

  componentWillUnmount = () => {
    Dimensions.removeEventListener('change', this.onDimensionsChanged);
  };

  onSwipeUp = () => {
    this.setState({ open: true });
  };

  onSwipeDown = () => {
    this.setState({ open: false });
  };

  onDimensionsChanged = ({ screen: { width } }: OnDimensionsChange) => {
    this.setState({ availableWidth: width });
  };

  getWidth = () => {
    return this.state.availableWidth;
  };

  getCardItemWidth = () => {
    return this.getWidth() * SNAP_WIDTH;
  };

  getSelectedAddress = () => {
    const { selectedIndex, data } = this.props;

    return idx(data, _ => _[selectedIndex].node.hotel.address) || {};
  };

  renderItem = ({ item }: { item: Object, index: number }) => {
    return <HotelSwipeItem width={this.getCardItemWidth()} data={item.node} />;
  };

  render = () => {
    const { data, selectedIndex, onSnapToItem } = this.props;
    const { open } = this.state;
    const swipeConfig = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 40,
    };

    return (
      <VerticalSwipeResponder
        style={[
          styles.container,
          { height: open ? OPEN_HEIGHT : CLOSED_HEIGHT },
        ]}
        onSwipeUp={this.onSwipeUp}
        onSwipeDown={this.onSwipeDown}
        config={swipeConfig}
      >
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
        {open && <Address data={this.getSelectedAddress()} />}
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
