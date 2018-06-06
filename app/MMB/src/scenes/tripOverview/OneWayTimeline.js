// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';

import Timeline from './Timeline';
import type { OneWayTimeline as OneWayTimelineType } from './__generated__/OneWayTimeline.graphql';

type Props = {|
  +data: OneWayTimelineType,
|};

function OneWayTimeline(props: Props) {
  return (
    <React.Fragment>
      <Translation passThrough={JSON.stringify(props.data, null, 2)} />
      <Timeline
        data={[
          <Translation key={1} passThrough="Departure" />,
          <Translation key={2} passThrough="Arrival" />,
        ]}
      />
    </React.Fragment>
  );
}

export default createFragmentContainer(
  OneWayTimeline,
  graphql`
    fragment OneWayTimeline on BookingOneWay {
      id
    }
  `,
);
