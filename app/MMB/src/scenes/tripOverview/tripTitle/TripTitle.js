// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Duration } from '@kiwicom/mobile-shared';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';

import TripOverviewContext, { type BookingType } from '../TripOverviewContext';
import type { TripTitle as TripTitleType } from './__generated__/TripTitle.graphql';
import MulticityTitle from './MulticityTitle';
import ReturnTitle from './ReturnTitle';
import TripTitleText from './TripTitleText';

type PropsWithContext = {|
  ...Props,
  +type: BookingType,
|};

const TripTitle = ({ type, data, index }: PropsWithContext) => {
  return (
    <View style={styles.row}>
      {type === 'BookingMulticity' && <MulticityTitle data={data} />}
      {type === 'BookingReturn' && <ReturnTitle isOutbound={index === 0} />}
      {type === 'BookingOneWay' && (
        <TripTitleText>
          <Translation id="mmb.trip_overview.trip_title.outbound" />
        </TripTitleText>
      )}
      <View style={styles.durationContainer}>
        <Duration
          showIcon={false}
          duration={idx(data, _ => _.duration)}
          style={styles.durationText}
        />
      </View>
    </View>
  );
};

type Props = {|
  +data: TripTitleType,
  +index: number,
|};

const TripTitleWithContext = (props: Props) => {
  return (
    <TripOverviewContext.Consumer>
      {({ type }) => <TripTitle {...props} type={type} />}
    </TripOverviewContext.Consumer>
  );
};

export default createFragmentContainer(
  TripTitleWithContext,
  graphql`
    fragment TripTitle on Trip {
      ...MulticityTitle
      duration
    }
  `,
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationContainer: {
    marginStart: 5,
  },
  durationText: {
    fontSize: 12,
  },
});
