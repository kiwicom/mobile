// @flow

import * as React from 'react';
import { graphql } from 'react-relay';

import PrivateApiRenderer from '../../components/relay/PrivateApiRenderer';
import SingleBooking from './SingleBooking';
import type { SingleBookingRendererQueryResponse } from './__generated__/SingleBookingRendererQuery.graphql';

type Props = {|
  bookingId: string,
  bookingDatabaseId: number, // FIXME: fix underlying API to use opaque ID by default
|};

export default class SingleBookingRenderer extends React.Component<Props, {}> {
  state = {
    offline: true,
  };

  static navigationOptions = {
    title: 'Booking detail',
  };

  renderSingleBooking = (
    propsFromRenderer: SingleBookingRendererQueryResponse,
  ) => <SingleBooking data={propsFromRenderer} />;

  render = () => {
    return (
      <PrivateApiRenderer
        query={graphql`
          query SingleBookingRendererQuery($bid: ID!) {
            ...SingleBooking @arguments(bid: $bid)
          }
        `}
        variables={{ bid: this.props.bookingDatabaseId }}
        render={this.renderSingleBooking}
      />
    );
  };
}
