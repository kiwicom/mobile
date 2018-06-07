// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import TimelineTitle from './TimelineTitle';
import type { TimelineArrival as TimelineArrivalDataType } from './__generated__/TimelineArrival.graphql';

type Props = {|
  +data: TimelineArrivalDataType,
|};

function TimelineArrival(props: Props) {
  return <TimelineTitle data={props.data} />;
}

export default createFragmentContainer(
  TimelineArrival,
  graphql`
    fragment TimelineArrival on RouteStop {
      ...TimelineTitle
    }
  `,
);
