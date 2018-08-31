// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/mobile-shared';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import TripOverviewContext, { type BookingType } from '../TripOverviewContext';
import type { TripTitle as TripTitleType } from './__generated__/TripTitle.graphql';
import MulticityTitle from './MulticityTitle';
import Duration from '../../../components/header/Duration';

type PropsWithContext = {|
  ...Props,
  +type: BookingType,
|};

const TripTitle = ({ type, data }: PropsWithContext) => {
  return (
    <View style={styles.row}>
      {type === 'BookingMulticity' && <MulticityTitle data={data} />}
      {/* TODO: Return */}
      {/* TODO: OneWay */}
      <View style={styles.durationContainer}>
        <Duration showIcon={false} data={data} />
      </View>
    </View>
  );
};

type Props = {|
  +data: TripTitleType,
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
      ...Duration
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
});
