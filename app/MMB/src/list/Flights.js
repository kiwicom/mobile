// @flow

import * as React from 'react';
import { PrivateApiRenderer } from '@kiwicom/mobile-relay';
import { graphql } from 'react-relay';

import type { FlightsQueryResponse } from './__generated__/FlightsQuery.graphql';
import FlightList from './FlightList';

type Props = {|
  accessToken: string,
|};

export default class Flights extends React.Component<Props> {
  renderInner = (innerProps: FlightsQueryResponse) => {
    return <FlightList data={innerProps} />;
  };

  render = () => (
    <PrivateApiRenderer
      render={this.renderInner}
      accessToken={this.props.accessToken}
      query={graphql`
        query FlightsQuery {
          ...FlightList
        }
      `}
    />
  );
}
