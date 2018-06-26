// @flow

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { StyleSheet, TextIcon, Text, Color } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';

import type { Duration as DurationType } from './__generated__/Duration.graphql';

type Props = {|
  data: DurationType,
|};

export function Duration(props: Props) {
  const { hours, minutes } = Duration.separateHours(
    idx(props, _ => _.data.duration) || 0,
  );

  return (
    <View style={styleSheet.row}>
      <TextIcon code="e" style={styleSheet.durationText} />
      <Text style={styleSheet.durationText}>
        <Translation passThrough=" " />
        <Translation passThrough={hours} />
        <Translation id="mmb.trip_info.duration.hours" />
        <Translation passThrough=" " />
        <Translation passThrough={minutes} />
        <Translation id="mmb.trip_info.duration.minutes" />
      </Text>
    </View>
  );
}

Duration.separateHours = (durationInMinutes: number) => {
  let minutes = durationInMinutes;

  if (minutes < 0) {
    minutes = 0;
  }

  const hours = Math.floor(minutes / 60);
  minutes = minutes % 60;

  return {
    hours,
    minutes,
  };
};

export default createFragmentContainer(
  Duration,
  graphql`
    fragment Duration on Trip {
      duration
    }
  `,
);

const styleSheet = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationText: {
    fontSize: 10,
    color: Color.textLight,
  },
});
