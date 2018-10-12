// @flow

import * as React from 'react';
import idx from 'idx';
import { View } from 'react-native';
import { graphql, PublicApiRenderer } from '@kiwicom/mobile-relay';
import {
  StyleSheet,
  CloseButton,
  Device,
  StretchedImage,
} from '@kiwicom/mobile-shared';
import {
  withNavigation,
  type NavigationType,
} from '@kiwicom/mobile-navigation';

import type { AvailableHotelSearchInput } from '../../singleHotel/AvailableHotelSearchInput';
import MapView from './MapView';
import type { SingleHotelMapScreenQueryResponse } from './__generated__/SingleHotelMapScreenQuery.graphql';
import { sanitizeDate } from '../../GraphQLSanitizers';
import AdditionalInfo from './AdditionalInfo';
import gradient from './gradient.png';

type Props = {|
  +currency: string,
  +search: AvailableHotelSearchInput,
  +navigation: NavigationType,
|};

class SingleHotelMapScreen extends React.Component<Props> {
  goBack = () => {
    this.props.navigation.goBack(null);
  };
  renderInnerComponent = ({
    availableHotel,
  }: SingleHotelMapScreenQueryResponse) => (
    <View style={styles.container}>
      <MapView hotel={idx(availableHotel, _ => _.hotel)} />
      <View style={styles.underlay}>
        <StretchedImage source={gradient} />
      </View>
      <AdditionalInfo data={availableHotel} />
      <View style={styles.button}>
        <CloseButton onPress={this.goBack} />
      </View>
    </View>
  );

  render() {
    const { search, currency } = this.props;
    return (
      <PublicApiRenderer
        query={graphql`
          query SingleHotelMapScreenQuery(
            $search: AvailableHotelSearchInput!
            $options: AvailableHotelOptionsInput
          ) {
            availableHotel(search: $search, options: $options) {
              hotel {
                ...MapView_hotel
              }
              ...AdditionalInfo
            }
          }
        `}
        variables={{
          search: {
            ...search,
            checkin: sanitizeDate(search.checkin),
            checkout: sanitizeDate(search.checkout),
          },
          options: { currency },
        }}
        render={this.renderInnerComponent}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    position: 'absolute',
    bottom: Device.isIPhoneX ? 36 : 8,
    start: 8,
    end: 8,
  },
  underlay: { height: 132 },
});

export default withNavigation(SingleHotelMapScreen);
