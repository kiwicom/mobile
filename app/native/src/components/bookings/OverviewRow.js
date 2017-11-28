// @flow

import * as React from 'react';
import { Text, View } from 'react-native';
import { graphql, createFragmentContainer } from 'react-relay';
import { SimpleCard, Date } from '@kiwicom/native-common';

import RouteStop from '../../components/flights/RouteStop';

import type { AllBookingsListRow_node } from './__generated__/OverviewRow_node.graphql';

type Props = {|
  node: AllBookingsListRow_node,
  showSeparator: boolean,
  onPress?: Function,
|};

function BookingOverviewRowWithoutData({
  node,
  onPress,
  showSeparator,
}: Props) {
  const { departure, arrival } = node;

  return (
    <SimpleCard onPress={onPress} separator={showSeparator}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View>
          <RouteStop data={departure} />
          <Date dateTime={departure && departure.localTime} />
        </View>

        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Text>&rarr;</Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <RouteStop data={arrival} />
          <Date dateTime={arrival && arrival.localTime} />
        </View>
      </View>
    </SimpleCard>
  );
}

export default createFragmentContainer(
  BookingOverviewRowWithoutData,
  graphql`
    fragment OverviewRow_node on Booking {
      departure {
        localTime
        ...RouteStop
      }
      arrival {
        localTime
        ...RouteStop
      }
    }
  `,
);
