// @flow

import * as React from 'react';
import idx from 'idx';
import { graphql } from 'react-relay';
import { PublicApiRenderer } from '@kiwicom/react-native-app-relay';
import moment from 'moment';

import type { AvailableHotelSearchInput } from '../AvailableHotelSearchInput';
import MapView from './MapView';
import type { SingleHotelMapScreenQueryResponse } from './__generated__/SingleHotelMapScreenQuery.graphql';

type ContainerProps = {|
  currency: string,
  search: AvailableHotelSearchInput,
|};

export default class SingleHotelMapScreen extends React.Component<
  ContainerProps,
> {
  renderInnerComponent = ({
    availableHotel,
  }: SingleHotelMapScreenQueryResponse) => (
    <MapView hotel={idx(availableHotel, _ => _.hotel)} />
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
            }
          }
        `}
        variables={{
          search: {
            ...search,
            checkin: moment(search.checkin).format('YYYY-MM-DD'),
            checkout: moment(search.checkout).format('YYYY-MM-DD'),
          },
          options: { currency },
        }}
        render={this.renderInnerComponent}
      />
    );
  }
}
