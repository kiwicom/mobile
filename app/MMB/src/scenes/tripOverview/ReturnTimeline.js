// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import Timeline from './Timeline';
import type { ReturnTimeline as ReturnTimelineType } from './__generated__/ReturnTimeline.graphql';

type Props = {|
  +data: ReturnTimelineType,
|};

function ReturnTimeline(props: Props) {
  return <Timeline data={[props.data.outbound, props.data.inbound]} />;
}

export default createFragmentContainer(
  ReturnTimeline,
  graphql`
    fragment ReturnTimeline on BookingReturn {
      outbound {
        ...Timeline
      }
      inbound {
        ...Timeline
      }
    }
  `,
);
