// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import OutboundFlights from './OutboundFlights';
import type { BoardingPassReturn as BoardingPassReturnType } from './__generated__/BoardingPassReturn.graphql';

type Props = {|
  +data: BoardingPassReturnType,
|};

export const BoardingPassReturn = (props: Props) => (
  <React.Fragment>
    <OutboundFlights data={props.data} />
    {/* <InboundFlights />*/}
  </React.Fragment>
);

export default createFragmentContainer(
  BoardingPassReturn,
  graphql`
    fragment BoardingPassReturn on BookingReturn {
      ...OutboundFlights
    }
  `,
);
