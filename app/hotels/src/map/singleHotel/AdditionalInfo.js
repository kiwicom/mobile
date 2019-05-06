// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import {
  StyleSheet,
  type OnLayout,
  Device,
  BottomSheetHandle,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import BottomSheet from './BottomSheet';
import HotelDetailPreview from '../hotelDetailPreview/HotelDetailPreview';
import Address from '../Address';
import type { AdditionalInfo_data as AdditionalInfoData } from './__generated__/AdditionalInfo_data.graphql';
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
    const name = data?.hotel?.name;
    const price = data?.total;
    const thumbnailUrl = data?.hotel?.mainPhoto?.thumbnailUrl;
    const stars = data?.hotel?.rating?.stars;
    const score = data?.hotel?.review?.score;
    return (
      <View style={styles.container} onLayout={this.onLayout}>
        <HotelPreviewProvider value={this.state}>
          <BottomSheet>
            <BottomSheetHandle />
            <View style={styles.detailPreviewContainer}>
              <HotelDetailPreview
                name={name}
                amount={price?.amount}
                currency={price?.currencyId}
                thumbnailUrl={thumbnailUrl}
                stars={stars}
                score={score}
              />
              <View style={styles.addressContainer}>
                <Address address={data?.hotel?.address} />
              </View>
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
    shadowColor: defaultTokens.paletteInkDark,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    android: {
      elevation: 1,
    },
  },
  detailPreviewContainer: {
    flex: 1,
    paddingTop: 5,
    paddingHorizontal,
  },
  addressContainer: {
    marginTop: 20,
  },
});

export default createFragmentContainer(AdditionalInfo, {
  data: graphql`
    fragment AdditionalInfo_data on HotelAvailabilityInterface {
      total {
        amount
        currencyId
      }
      hotel {
        address {
          ...Address_address
        }
        review {
          score
        }
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
});
