// @flow

import * as React from 'react';
import { graphql } from 'react-relay';

import PrivateApiRenderer from '../../components/relay/PrivateApiRenderer';
import SingleBooking from './SingleBooking';

type Props = {|
  bookingId: string,
  bookingDatabaseId: number, // FIXME: fix underlying API to use opaque ID by default
|};

export default class SingleBookingRenderer extends React.Component<Props, {}> {
  state = {
    offline: true,
  };

  static navigationOptions = ({ bookingDatabaseId }: Props) => ({
    title: `Booking detail - ${bookingDatabaseId}`,
  });

  render = () => {
    return (
      <PrivateApiRenderer
        query={graphql`
          query SingleBookingRendererQuery($bid: ID!) {
            ...SingleBooking_booking @arguments(bid: $bid)
          }
        `}
        variables={{ bid: this.props.bookingDatabaseId }}
        render={props => <SingleBooking booking={props} />}
      />
    );
  };
}
