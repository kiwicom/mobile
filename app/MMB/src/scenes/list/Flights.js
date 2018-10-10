// @flow

import * as React from 'react';
import { graphql, PrivateApiRenderer } from '@kiwicom/mobile-relay';

import type { FlightsQueryResponse } from './__generated__/FlightsQuery.graphql';
import FlightListContainer from './FlightListContainer';

type Props = {||};

export default class Flights extends React.Component<Props> {
  renderInner = (innerProps: FlightsQueryResponse) => (
    <FlightListContainer {...innerProps} />
  );

  render = () => (
    <PrivateApiRenderer
      render={this.renderInner}
      query={graphql`
        query FlightsQuery {
          future: customerBookings(only: FUTURE) {
            ...FlightListContainer_future
          }
          past: customerBookings(only: PAST, order: DESC) {
            ...FlightListContainer_past
          }
        }
      `}
    />
  );
}
