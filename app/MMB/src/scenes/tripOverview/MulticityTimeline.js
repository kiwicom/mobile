// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';

import Timeline from './Timeline';
import type { MulticityTimeline as MulticityTimelineType } from './__generated__/MulticityTimeline.graphql';

type Props = {|
  +data: MulticityTimelineType,
|};

function MulticityTimeline(props: Props) {
  return (
    <React.Fragment>
      <Translation passThrough={JSON.stringify(props.data, null, 2)} />
      <Timeline
        data={[
          <Translation key={1} passThrough="Departure A" />,
          <Translation key={2} passThrough="Arrival A" />,
          <Translation key={3} passThrough="Departure B" />,
          <Translation key={4} passThrough="Arrival B" />,
          <Translation key={5} passThrough="Departure C" />,
          <Translation key={6} passThrough="Arrival C" />,
        ]}
      />
    </React.Fragment>
  );
}

export default createFragmentContainer(
  MulticityTimeline,
  graphql`
    fragment MulticityTimeline on BookingMulticity {
      id
    }
  `,
);
