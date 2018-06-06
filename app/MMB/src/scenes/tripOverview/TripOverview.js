// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { SimpleCard } from '@kiwicom/mobile-shared';

import OneWayTimeline from './OneWayTimeline';
import ReturnTimeline from './ReturnTimeline';
import MulticityTimeline from './MulticityTimeline';
import type { TripOverview as TripOverviewType } from './__generated__/TripOverview.graphql';

type Props = {|
  +data: TripOverviewType,
|};

function getValidTimeline(data) {
  switch (data.type) {
    case 'ONE_WAY':
      return <OneWayTimeline data={data.oneWay} />;
    case 'RETURN':
      return <ReturnTimeline data={data.return} />;
    case 'MULTICITY':
      return <MulticityTimeline data={data.multicity} />;
  }
  return null;
}

function TripOverview(props: Props) {
  const children = getValidTimeline(props.data);
  return <SimpleCard>{children}</SimpleCard>;
}

export default createFragmentContainer(
  TripOverview,
  graphql`
    fragment TripOverview on Booking {
      type
      oneWay {
        ...OneWayTimeline
      }
      return {
        ...ReturnTimeline
      }
      multicity {
        ...MulticityTimeline
      }
    }
  `,
);
