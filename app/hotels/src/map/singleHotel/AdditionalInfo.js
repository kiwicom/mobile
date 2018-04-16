// @flow

import * as React from 'react';
import idx from 'idx';
import { createFragmentContainer, graphql } from 'react-relay';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/mobile-shared';

import BottomSheet from './BottomSheet';
import HotelDetailPreview from '../HotelDetailPreview';
import Address from '../Address';
import type { AdditionalInfo as AdditionalInfoData } from './__generated__/AdditionalInfo.graphql';
import BottomSheetHandle from '../BottomSheetHandle';

type ContainerProps = {|
  data: $FlowFixMeProps,
|};

type Props = {
  ...ContainerProps,
  data: ?AdditionalInfoData,
};

const styles = StyleSheet.create({
  detailPreviewContainer: {
    paddingTop: 5,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

export class AdditionalInfo extends React.Component<Props> {
  render() {
    const { data } = this.props;

    return (
      <BottomSheet>
        <BottomSheetHandle />
        <View style={styles.detailPreviewContainer}>
          <HotelDetailPreview availability={data} />
        </View>
        <Address address={idx(data, _ => _.hotel.address)} />
      </BottomSheet>
    );
  }
}

export default (createFragmentContainer(
  AdditionalInfo,
  graphql`
    fragment AdditionalInfo on HotelAvailability {
      ...HotelDetailPreview_availability
      hotel {
        address {
          ...Address_address
        }
      }
    }
  `,
): React.ComponentType<ContainerProps>);
