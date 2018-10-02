// @flow

import * as React from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import {
  BottomSheet,
  Device,
  StyleSheet,
  type OnLayout,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';

import HotelSwipeItem from './HotelSwipeItem';
import Address from '../Address';
import type { HotelSwipeList as HotelSwipeListData } from './__generated__/HotelSwipeList.graphql';
import { openHeight, closedHeight } from '../bottomSheetDimensions';
import BottomSheetHandle from '../BottomSheetHandle';
import { HotelPreviewProvider } from '../hotelDetailPreview/HotelDetailPreviewContext';

type Props = {|
  +data: HotelSwipeListData,
  +selectedIndex: number,
  +onSnapToItem: (index: number) => void,
  +onOpenSingleHotel: (hotelId: string) => void,
|};

type State = {|
  containerWidth: number,
|};

const SNAP_WIDTH = 0.8;
const PADDING_HORIZONTAL = 8;
const CARD_ITEM_WIDTH = Device.DEVICE_THRESHOLD * SNAP_WIDTH;

class HotelSwipeList extends React.Component<Props, State> {
  carouselRef: React.ElementRef<typeof Carousel>;
  state = {
    containerWidth: 0,
  };

  componentDidUpdate = () => {
    if (this.carouselRef) {
      this.carouselRef.snapToItem(this.props.selectedIndex, false);
    }
  };

  getSelectedAddress = () => {
    const { selectedIndex, data } = this.props;

    return idx(data, _ => _[selectedIndex].node.address) || {};
  };

  renderItem = ({ item }: { item: Object, index: number }) => {
    const { onOpenSingleHotel } = this.props;

    return (
      <HotelSwipeItem
        width={CARD_ITEM_WIDTH}
        data={item.node}
        onPress={onOpenSingleHotel}
      />
    );
  };

  storeRef = (ref: React.ElementRef<typeof Carousel>) => {
    this.carouselRef = ref;
  };

  onLayout = (e: OnLayout) => {
    const containerPadding = PADDING_HORIZONTAL * 2;
    this.setState({
      containerWidth: e.nativeEvent.layout.width - containerPadding,
    });
  };

  render = () => {
    const { data, onSnapToItem } = this.props;

    return (
      <View style={styles.container} onLayout={this.onLayout}>
        <HotelPreviewProvider value={this.state}>
          <BottomSheet openHeight={openHeight} closedHeight={closedHeight}>
            <BottomSheetHandle />
            {data.length ? (
              <React.Fragment>
                <View style={styles.sliderWrapper}>
                  <Carousel
                    ref={this.storeRef}
                    data={data}
                    renderItem={this.renderItem}
                    sliderWidth={Device.DEVICE_THRESHOLD}
                    itemWidth={CARD_ITEM_WIDTH}
                    inactiveSlideScale={1}
                    inactiveSlideOpacity={0.5}
                    decelerationRate="fast"
                    activeSlideAlignment="start"
                    containerCustomStyle={styles.slider}
                    removeClippedSubviews={false}
                    onSnapToItem={onSnapToItem}
                    useScrollView={true}
                  />
                </View>
                <Address address={this.getSelectedAddress()} />
              </React.Fragment>
            ) : (
              <View style={styles.noResultsContainer}>
                <Translation id="hotels.map.no_results" />
              </View>
            )}
          </BottomSheet>
        </HotelPreviewProvider>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  sliderWrapper: {
    height: closedHeight,
    borderRadius: 6,
  },
  slider: {
    paddingTop: 5,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingBottom: 8,
  },
  container: {
    position: 'absolute',
    bottom: Device.isIPhoneX ? 88 : 60,
    start: 8,
    end: 8,
  },
  noResultsContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
});

export default createFragmentContainer(
  HotelSwipeList,
  graphql`
    fragment HotelSwipeList on AllHotelAvailabilityHotelEdge
      @relay(plural: true) {
      node {
        id
        ...HotelSwipeItem
        address {
          ...Address_address
        }
      }
    }
  `,
);
