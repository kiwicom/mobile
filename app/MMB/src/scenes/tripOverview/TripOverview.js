// @flow strict

import * as React from 'react';
import { ScrollView } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { SimpleCard, StyleSheet } from '@kiwicom/mobile-shared';

import TripOverviewContext from './TripOverviewContext';
import OneWayTimeline from './OneWayTimeline';
import ReturnTimeline from './ReturnTimeline';
import MulticityTimeline from './MulticityTimeline';
import type { TripOverview as TripOverviewType } from './__generated__/TripOverview.graphql';

type Props = {|
  +data: TripOverviewType,
|};

function TripOverview(props: Props) {
  const type = props.data.__typename;
  return (
    <ScrollView>
      <TripOverviewContext.Provider>
        <SimpleCard style={styleSheet.simpleCard}>
          {type === 'BookingOneWay' && <OneWayTimeline data={props.data} />}
          {type === 'BookingReturn' && <ReturnTimeline data={props.data} />}
          {type === 'BookingMulticity' && (
            <MulticityTimeline data={props.data} />
          )}
        </SimpleCard>
      </TripOverviewContext.Provider>
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
