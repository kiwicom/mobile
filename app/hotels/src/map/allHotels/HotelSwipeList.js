// @flow

import * as React from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import {
  BottomSheet,
  Device,
  StyleSheet,
  AdaptableLayout,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';

import HotelSwipeItem from './HotelSwipeItem';
import Address from '../Address';
import type { HotelSwipeList as HotelSwipeListData } from './__generated__/HotelSwipeList.graphql';
import { openHeight, closedHeight } from '../bottomSheetDimensions';
import BottomSheetHandle from '../BottomSheetHandle';

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
  fullWidth: {
    width: '100%',
  },
  wide: {
    maxWidth: Device.DEVICE_THRESHOLD,
  },
  noResultsContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
});

const CARD_ITEM_WIDTH = Device.DEVICE_THRESHOLD * SNAP_WIDTH;

class HotelSwipeList extends React.Component<Props, State> {
  carouselRef: React.ElementRef<typeof Carousel>;

  componentDidUpdate = () => {
    if (this.carouselRef) {
      this.carouselRef.snapToItem(this.props.selectedIndex, false);
    }
  };

  getSelectedAddress = () => {
    const { selectedIndex, data } = this.props;

    return idx(data, _ => _[selectedIndex].node.hotel.address) || {};
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

  render = () => {
    const { data, onSnapToItem } = this.props;

    const child = (
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
    );

    return (
      <AdaptableLayout
        renderOnWide={
          <View style={[styles.fullWidth, styles.wide]}>{child}</View>
        }
        renderOnNarrow={<View style={styles.fullWidth}>{child}</View>}
      />
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
            ...Address_address
          }
        }
      }
    }
  `,
);
