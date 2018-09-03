// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { NetworkImage, StyleSheet, TextIcon } from '@kiwicom/mobile-shared';
import idx from 'idx';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import TimelineRow from './TimelineRow';
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
  const airlineIata = idx(legInfo, _ => _.airline.code);

  const operatingAirline = idx(legInfo, _ => _.operatingAirline.name) || '';
  const operatingAirlineIata = idx(legInfo, _ => _.operatingAirline.iata);

  const flightModel = idx(legInfo, _ => _.vehicle.model) || '';
  const manufacturer = idx(legInfo, _ => _.vehicle.manufacturer) || '';

  const terminal = idx(props.routeStop, _ => _.terminal) || '';
  const iata = idx(props.routeStop, _ => _.airport.code) || '';
  const city = idx(props.routeStop, _ => _.airport.city.name) || '';

  return (
    <React.Fragment>
      <TimelineTitle data={props.routeStop} />

      {/* TODO: BUS vs. PLANE */}

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

          <TimelineRow
            icon={<TextIcon code="R" style={styleSheet.icon} />}
            value={
              <Translation passThrough={`${manufacturer} ${flightModel}`} />
            }
          />
          {terminal !== '' && (
            <TimelineRow
              icon={<TextIcon code="*" style={styleSheet.icon} />}
              value={
                <Translation
                  id="mmb.flight_overview.timeline.terminal"
                  values={{
                    terminal,
                    city,
                    iata,
                  }}
                />
              }
            />
          )}
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
      terminal
      airport {
        code
        city {
          name
        }
      }
    }

    fragment TimelineDeparture_legInfo on Leg {
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
});
