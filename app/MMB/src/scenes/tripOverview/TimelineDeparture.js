// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { NetworkImage, StyleSheet, Color, Text } from '@kiwicom/mobile-shared';
import idx from 'idx';

import TimelineTitle from './TimelineTitle';
import type { TimelineDeparture_routeStop } from './__generated__/TimelineDeparture_routeStop.graphql';
import type { TimelineDeparture_legInfo } from './__generated__/TimelineDeparture_legInfo.graphql';

type Props = {|
  +routeStop: TimelineDeparture_routeStop,
  +legInfo: TimelineDeparture_legInfo,
|};

function TimelineDeparture(props: Props) {
  const legInfo = props.legInfo;
  const flightNumber = idx(legInfo, _ => _.flightNumber);
  const airlineLogoUrl = idx(legInfo, _ => _.airline.logoUrl);
  const airlineName = idx(legInfo, _ => _.airline.name);

  return (
    <React.Fragment>
      <TimelineTitle data={props.routeStop} />

      {/* TODO: BUS vs. PLANE */}

      <View style={styleSheet.row}>
        <View style={styleSheet.detailedInfo}>
          <View style={styleSheet.row}>
            <Text style={styleSheet.key}>
              <Translation id="mmb.flight_overview.timeline.carrier" />
            </Text>
            <Text style={styleSheet.value}>
              <Translation passThrough={` ${airlineName || ''}`} />
            </Text>
          </View>

          <View style={styleSheet.row}>
            {/* TODO: this looks weird when we need to work with flights and busses - how to fix? */}
            <Text style={styleSheet.key}>
              <Translation id="mmb.flight_overview.timeline.flight_no" />
            </Text>
            <Text style={styleSheet.value}>
              <Translation passThrough={` ${flightNumber || ''}`} />
            </Text>
          </View>
        </View>

        <NetworkImage
          source={{ uri: airlineLogoUrl }}
          style={styleSheet.image}
        />
      </View>
    </React.Fragment>
  );
}

export default createFragmentContainer(
  TimelineDeparture,
  graphql`
    fragment TimelineDeparture_routeStop on RouteStop {
      ...TimelineTitle
    }

    fragment TimelineDeparture_legInfo on Leg {
      flightNumber
      airline {
        name
        logoUrl
      }
    }
  `,
);

const styleSheet = StyleSheet.create({
  detailedInfo: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 24,
    height: 24,
  },
  key: {
    fontSize: 12,
  },
  value: {
    fontSize: 12,
    color: Color.textLight,
  },
});
