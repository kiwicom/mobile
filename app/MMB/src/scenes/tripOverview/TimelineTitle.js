// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';
import { StyleSheet, Color, Text } from '@kiwicom/mobile-shared';
import idx from 'idx';

import type { TimelineTitle as TimelineTitleDataType } from './__generated__/TimelineTitle.graphql';

type Props = {|
  +data: TimelineTitleDataType,
|};

function TimelineTitle(props: Props) {
  const data = props.data;
  const localTime = idx(data, _ => _.localTime);
  const cityName = idx(data, _ => _.airport.city.name);
  const iataCode = idx(data, _ => _.airport.locationId);

  return (
    <View style={styleSheet.row}>
      <View style={styleSheet.dateTime}>
        {localTime != null && (
          <Translation
            passThrough={DateFormatter(new Date(localTime)).formatToTime()}
          />
        )}

        <Translation passThrough=" " />

        {localTime != null && (
          <Text style={styleSheet.date}>
            <Translation
              passThrough={DateFormatter(new Date(localTime)).formatToDate()}
            />
          </Text>
        )}
      </View>

      <Translation passThrough={cityName} />
      <Translation passThrough=" " />
      <Text style={styleSheet.iataCode}>
        <Translation passThrough={iataCode} />
      </Text>
    </View>
  );
}

export default createFragmentContainer(
  TimelineTitle,
  graphql`
    fragment TimelineTitle on RouteStop {
      localTime
      airport {
        locationId
        city {
          name
        }
      }
    }
  `,
);

const styleSheet = StyleSheet.create({
  dateTime: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  date: {
    color: Color.textLight,
  },
  iataCode: {
    color: Color.textLight,
  },
  row: {
    flexDirection: 'row',
  },
});
