// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import Timeline from './Timeline';
import type { OneWayTimeline as OneWayTimelineType } from './__generated__/OneWayTimeline.graphql';

type Props = {|
  +data: OneWayTimelineType,
|};

function OneWayTimeline(props: Props) {
  return <Timeline data={[props.data.trip]} />;
}

export default createFragmentContainer(
  OneWayTimeline,
  graphql`
    fragment OneWayTimeline on BookingOneWay {
      trip {
        ...Timeline
      }
    }
  `,
);
