// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import Timeline from './Timeline';
import type { ReturnTimeline as ReturnTimelineType } from './__generated__/ReturnTimeline.graphql';

type Props = {|
  +data: ReturnTimelineType,
|};

function ReturnTimeline(props: Props) {
  return (
    <React.Fragment>
      <Timeline data={props.data.outbound} />
      <Timeline data={props.data.inbound} />
    </React.Fragment>
  );
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
