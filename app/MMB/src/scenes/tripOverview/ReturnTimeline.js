// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';

import Timeline from './Timeline';
import type { ReturnTimeline as ReturnTimelineType } from './__generated__/ReturnTimeline.graphql';

type Props = {|
  +data: ReturnTimelineType,
|};

function ReturnTimeline(props: Props) {
  return (
    <React.Fragment>
      <Translation passThrough={JSON.stringify(props.data, null, 2)} />
      <Timeline
        data={[
          <Translation key={1} passThrough="Departure" />,
          <Translation key={2} passThrough="Arrival" />,
          <Translation key={3} passThrough="Return Departure" />,
          <Translation key={4} passThrough="Return Arrival" />,
        ]}
      />
    </React.Fragment>
  );
}

export default createFragmentContainer(
  ReturnTimeline,
  graphql`
    fragment ReturnTimeline on BookingReturn {
      id
    }
  `,
);
