// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Color } from '@kiwicom/mobile-shared';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import TripInfoOneWay from './TripInfoOneWay';
import TripInfoReturn from './TripInfoReturn';
import TripInfoMulticity from './TripInfoMulticity';
import type { TripInfo as TripInfoType } from './__generated__/TripInfo.graphql';

type Props = {|
  +data: TripInfoType,
|};

function TripInfo(props: Props) {
  const data = idx(props, _ => _.data);
  const type = idx(data, _ => _.__typename);

  return (
    <View style={styleSheet.wrapper}>
      {type === 'BookingOneWay' && <TripInfoOneWay data={data} />}
      {type === 'BookingReturn' && <TripInfoReturn data={data} />}
      {type === 'BookingMulticity' && <TripInfoMulticity data={data} />}
    </View>
  );
}

export default createFragmentContainer(
  TripInfo,
  graphql`
    fragment TripInfo on BookingInterface {
      __typename
      ... on BookingOneWay {
        ...TripInfoOneWay
      }
      ... on BookingReturn {
        ...TripInfoReturn
      }
      ... on BookingMulticity {
        ...TripInfoMulticity
      }
    }
  `,
);

const styleSheet = StyleSheet.create({
  wrapper: {
    backgroundColor: Color.white,
  },
});
