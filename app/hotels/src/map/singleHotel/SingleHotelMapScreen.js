// @flow

import * as React from 'react';
import idx from 'idx';
import { View } from 'react-native';
import { graphql } from 'react-relay';
import { PublicApiRenderer } from '@kiwicom/react-native-app-relay';
import { StyleSheet } from '@kiwicom/react-native-app-shared';

import type { AvailableHotelSearchInput } from '../../singleHotel/AvailableHotelSearchInput';
import MapView from './MapView';
import type { SingleHotelMapScreenQueryResponse } from './__generated__/SingleHotelMapScreenQuery.graphql';
import { sanitizeDate } from '../../GraphQLSanitizers';
import AdditionalInfo from './AdditionalInfo';

type ContainerProps = {|
  currency: string,
  search: AvailableHotelSearchInput,
|};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default class SingleHotelMapScreen extends React.Component<
  ContainerProps,
> {
  renderInnerComponent = ({
    availableHotel,
  }: SingleHotelMapScreenQueryResponse) => (
    <View style={styles.container}>
      <MapView hotel={idx(availableHotel, _ => _.hotel)} />
      <AdditionalInfo data={availableHotel} />
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
