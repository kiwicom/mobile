// @flow strict

import * as React from 'react';
import { ScrollView } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { SimpleCard, StyleSheet } from '@kiwicom/mobile-shared';

import OneWayTimeline from './OneWayTimeline';
import ReturnTimeline from './ReturnTimeline';
import MulticityTimeline from './MulticityTimeline';
import type { TripOverview as TripOverviewType } from './__generated__/TripOverview.graphql';

type Props = {|
  +data: TripOverviewType,
|};

function getValidTimeline(data) {
  switch (data.__typename) {
    case 'BookingOneWay':
      return <OneWayTimeline data={data} />;
    case 'BookingReturn':
      return <ReturnTimeline data={data} />;
    case 'BookingMulticity':
      return <MulticityTimeline data={data} />;
  }
  return null;
}

function TripOverview(props: Props) {
  const children = getValidTimeline(props.data);

  return (
    <ScrollView>
      <SimpleCard style={styleSheet.simpleCard}>{children}</SimpleCard>
    </ScrollView>
  );
}

export default createFragmentContainer(
  TripOverview,
  graphql`
    fragment TripOverview on BookingInterface {
      __typename
      ... on BookingOneWay {
        ...OneWayTimeline
      }
      ... on BookingReturn {
        ...ReturnTimeline
      }
      ... on BookingMulticity {
        ...MulticityTimeline
      }
    }
  `,
);

const styleSheet = StyleSheet.create({
  simpleCard: {
    borderTopWidth: 0,
  },
});
