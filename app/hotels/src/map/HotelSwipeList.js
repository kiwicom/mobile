// @flow

import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {
  HotelCard,
  Address,
  VerticalSwipeResponder,
  type OnDimensionsChange,
} from '@kiwicom/react-native-app-common';

type Props = {|
  items: Object[], // todo
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
const OPEN_HEIGHT = 130;
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

  renderItem = ({ item }: { item: Object, index: number }) => {
    return <HotelCard width={this.getCardItemWidth()} hotel={item.data} />;
  };

  render = () => {
    const { items, selectedIndex, onSnapToItem } = this.props;
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
          data={items}
          renderItem={this.renderItem}
          sliderWidth={this.getWidth()}
          itemWidth={this.getCardItemWidth()}
          firstItem={selectedIndex}
          inactiveSlideScale={1}
          inactiveSlideOpacity={0.5}
          decelerationRate="fast"
          loop
          activeSlideAlignment="start"
          containerCustomStyle={styles.slider}
          removeClippedSubviews={false}
          onSnapToItem={onSnapToItem}
        />
        {open && <Address address="950 Candice Wells Suite 375, Dublin" />}
      </VerticalSwipeResponder>
    );
  };
}

export default HotelSwipeList;
