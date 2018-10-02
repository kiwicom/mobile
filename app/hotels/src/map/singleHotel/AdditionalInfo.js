// @flow

import * as React from 'react';
import idx from 'idx';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { StyleSheet, type OnLayout, Device } from '@kiwicom/mobile-shared';

import BottomSheet from './BottomSheet';
import HotelDetailPreview from '../hotelDetailPreview/HotelDetailPreview';
import Address from '../Address';
import type { AdditionalInfo as AdditionalInfoData } from './__generated__/AdditionalInfo.graphql';
import BottomSheetHandle from '../BottomSheetHandle';
import { HotelPreviewProvider } from '../hotelDetailPreview/HotelDetailPreviewContext';

type Props = {
  +data: ?AdditionalInfoData,
};

type State = {|
  containerWidth: number,
|};

export class AdditionalInfo extends React.Component<Props, State> {
  state = {
    containerWidth: 0,
  };

  onLayout = (e: OnLayout) => {
    this.setState({
      containerWidth: e.nativeEvent.layout.width - paddingHorizontal * 2,
    });
  };

  render() {
    const { data } = this.props;
    const name = idx(data, _ => _.hotel.name);
    const price = idx(data, _ => _.price);
    const thumbnailUrl = idx(data, _ => _.hotel.mainPhoto.thumbnailUrl);
    const stars = idx(data, _ => _.hotel.rating.stars);
    const score = idx(data, _ => _.hotel.review.score);
    return (
      <View style={styles.container} onLayout={this.onLayout}>
        <HotelPreviewProvider value={this.state}>
          <BottomSheet>
            <BottomSheetHandle />
            <View style={styles.detailPreviewContainer}>
              <HotelDetailPreview
                name={name}
                price={price}
                thumbnailUrl={thumbnailUrl}
                stars={stars}
                score={score}
              />
              <Address address={idx(data, _ => _.hotel.address)} />
            </View>
          </BottomSheet>
        </HotelPreviewProvider>
      </View>
    );
  }
}

const paddingHorizontal = 10;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    start: 8,
    end: 8,
    bottom: Device.isIPhoneX ? 88 : 60,
  },
  detailPreviewContainer: {
    flex: 1,
    paddingTop: 5,
    paddingHorizontal,
    paddingBottom: 10,
  },
});

export default createFragmentContainer(
  AdditionalInfo,
  graphql`
    fragment AdditionalInfo on HotelAvailability {
      price {
        amount
        currency
      }
      hotel {
        address {
          ...Address_address
        }
        review {
          score
        }
        id
        name
        mainPhoto {
          thumbnailUrl
        }
        rating {
          stars
        }
      }
    }
  `,
);
