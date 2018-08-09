// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import Timeline from './Timeline';
import type { MulticityTimeline as MulticityTimelineType } from './__generated__/MulticityTimeline.graphql';

type Props = {|
  +data: MulticityTimelineType,
|};

function MulticityTimeline(props: Props) {
  return <Timeline data={props.data.trips} type="MULTICITY" />;
}

export default createFragmentContainer(
  MulticityTimeline,
  graphql`
    fragment MulticityTimeline on BookingMulticity {
      trips {
        ...Timeline
      }
    }
  `,
);
