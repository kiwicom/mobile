// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import {
  NetworkImage,
  StyleSheet,
  TextIcon,
  Duration,
} from '@kiwicom/mobile-shared';
import idx from 'idx';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import TimelineRow from './TimelineRow';
import TimelineTitle from './TimelineTitle';
import TimelineTerminal from './TimelineTerminal';
import type { TimelineDeparture_routeStop } from './__generated__/TimelineDeparture_routeStop.graphql';
import type { TimelineDeparture_legInfo } from './__generated__/TimelineDeparture_legInfo.graphql';
import type { TimelineDeparture_arrival } from './__generated__/TimelineDeparture_arrival.graphql';

type Props = {|
  +routeStop: TimelineDeparture_routeStop,
  +legInfo: TimelineDeparture_legInfo,
  +arrival: TimelineDeparture_arrival,
|};

function TimelineDeparture(props: Props) {
  const legInfo = props.legInfo;

  const flightNumber = idx(legInfo, _ => _.flightNumber);
  const airlineLogoUrl = idx(legInfo, _ => _.airline.logoUrl);
  const airlineName = idx(legInfo, _ => _.airline.name);
  const airlineIata = idx(legInfo, _ => _.airline.code);

  const operatingAirline = idx(legInfo, _ => _.operatingAirline.name) || '';
  const operatingAirlineIata = idx(legInfo, _ => _.operatingAirline.iata);

  const flightModel = idx(legInfo, _ => _.vehicle.model) || '';
  const manufacturer = idx(legInfo, _ => _.vehicle.manufacturer) || '';

  const duration = idx(legInfo, _ => _.duration);
  return (
    <React.Fragment>
      <TimelineTitle data={props.routeStop} />

      {/* TODO: BUS vs. PLANE */}
      <View style={styleSheet.durationContainer}>
        <View style={styleSheet.iconWrapper}>
          <TextIcon code="a" style={styleSheet.durationIcon} />
        </View>
        <Duration
          duration={duration}
          showIcon={false}
          style={styleSheet.duration}
        />
      </View>
      <View style={styleSheet.row}>
        <View style={styleSheet.detailedInfo}>
          <TimelineRow
            icon={
              <TextIcon
                code="a"
                style={[styleSheet.icon, styleSheet.carrierIcon]}
              />
            }
            title={<Translation id="mmb.flight_overview.timeline.carrier" />}
            value={<Translation passThrough={` ${airlineName || ''}`} />}
          />

          {airlineIata !== operatingAirlineIata && (
            <TimelineRow
              icon={
                <TextIcon
                  code="a"
                  style={[styleSheet.icon, styleSheet.carrierIcon]}
                />
              }
              title={
                <Translation id="mmb.flight_overview.timeline.operating_airline" />
              }
              value={<Translation passThrough={`  ${operatingAirline}`} />}
            />
          )}

          <TimelineRow
            icon={<TextIcon code="R" style={styleSheet.icon} />}
            title={<Translation id="mmb.flight_overview.timeline.flight_no" />}
            value={
              <Translation
                passThrough={` ${airlineIata || ''} ${flightNumber || ''}`}
              />
            }
          />

          {manufacturer !== '' &&
            flightModel !== '' && (
              <TimelineRow
                icon={<TextIcon code="R" style={styleSheet.icon} />}
                value={
                  <Translation passThrough={`${manufacturer} ${flightModel}`} />
                }
              />
            )}

          <TimelineTerminal
            data={props.routeStop}
            icon={<TextIcon code="*" style={styleSheet.icon} />}
          />

          <TimelineTerminal
            data={props.arrival}
            icon={<TextIcon code="%" style={styleSheet.icon} />}
          />
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
    fragment TimelineDeparture_arrival on RouteStop {
      ...TimelineTerminal
    }
    fragment TimelineDeparture_routeStop on RouteStop {
      ...TimelineTitle
      ...TimelineTerminal
    }

    fragment TimelineDeparture_legInfo on Leg {
      duration
      flightNumber
      operatingAirline {
        name
        iata
      }
      airline {
        name
        logoUrl
        code
      }
      vehicle {
        model
        manufacturer
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
  icon: {
    fontSize: 12,
    color: defaultTokens.colorIconSecondary,
    marginEnd: 5,
  },
  carrierIcon: {
    transform: [{ rotate: '45deg' }],
  },
  duration: {
    fontSize: 12,
    color: defaultTokens.colorTextAttention,
  },
  iconWrapper: {
    backgroundColor: defaultTokens.colorIconSecondary,
    position: 'absolute',
    start: -25,
    top: 8.5,
    zIndex: 1000,
    padding: 2,
    borderRadius: 6,
  },
  durationIcon: {
    color: defaultTokens.paletteWhite,
    transform: [{ rotate: '225deg' }],
  },
  durationContainer: {
    paddingVertical: 10,
  },
});
