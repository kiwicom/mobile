// @flow

import * as React from 'react';
import { graphql, PrivateApiRenderer } from '@kiwicom/mobile-relay';

import PassengerDetail from './PassengerDetail';
import type { PassengerDetailContainerQuery } from './__generated__/PassengerDetailContainerQuery.graphql';

type Props = {|
  bookingId: string,
|};

export default class PassengerDetailContainer extends React.Component<Props> {
  renderInner = (renderProps: PassengerDetailContainerQuery) => {
    return <PassengerDetail booking={renderProps.booking} />;
  };

  render = () => (
    <PrivateApiRenderer
      query={graphql`
        query PassengerDetailContainerQuery($id: ID!) {
          booking(id: $id) {
            ...PassengerDetail_booking
          }
        }
      `}
      variables={{ id: this.props.bookingId }}
      render={this.renderInner}
    />
  );
}
