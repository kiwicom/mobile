// @flow strict

import * as React from 'react';
import idx from 'idx';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { type AlertTranslationType } from '@kiwicom/mobile-localization';

import TripOverviewContext from './TripOverviewContext';
import Timeline from './Timeline';
import type { ReturnTimeline as ReturnTimelineType } from './__generated__/ReturnTimeline.graphql';

type Warning = {|
  +text: AlertTranslationType,
  +timelineTitle: {|
    +localTime: ?Date,
    +iataCode: ?string,
  |},
|};

type Props = {|
  +data: ReturnTimelineType,
  warnings: Warning[],
  +actions: {
    +addWarningData: (warning: Warning) => void,
  },
|};

class ReturnTimeline extends React.Component<Props> {
  componentDidMount() {
    const { outbound, inbound } = this.props.data;
    const outboundDepartureLocationId =
      idx(outbound, _ => _.departure.airport.locationId) || '';
    const outboundDepartureCityName =
      idx(outbound, _ => _.departure.airport.city.name) || '';
    const inboundArrivalLocationId =
      idx(inbound, _ => _.arrival.airport.locationId) || '';
    const inboundArrivalCityName =
      idx(inbound, _ => _.arrival.airport.city.name) || '';

    if (outboundDepartureLocationId !== inboundArrivalLocationId) {
      const warning = {
        text: {
          id:
            'mmb.flight_overview.timeline.warning.different_airport_return_first',
          values: {
            arrival: `${inboundArrivalCityName} (${inboundArrivalLocationId})`,
            departure: `${outboundDepartureCityName} (${outboundDepartureLocationId})`,
          },
        },
        timelineTitle: {
          localTime: idx(inbound, _ => _.arrival.localTime),
          iataCode: inboundArrivalLocationId,
        },
      };
      this.props.actions.addWarningData(warning);
    }

    const inboundDepartureLocationId =
      idx(inbound, _ => _.departure.airport.locationId) || '';
    const inboundDepartureCityName =
      idx(inbound, _ => _.departure.airport.city.name) || '';
    const outboundArrivalLocationId =
      idx(outbound, _ => _.arrival.airport.locationId) || '';
    const outboundArrivalCityName =
      idx(outbound, _ => _.arrival.airport.city.name) || '';

    if (outboundArrivalLocationId !== inboundDepartureLocationId) {
      const warning = {
        text: {
          id:
            'mmb.flight_overview.timeline.warning.different_airport_return_first',
          values: {
            arrival: `${outboundArrivalCityName} (${outboundArrivalLocationId})`,
            departure: `${inboundDepartureCityName} (${inboundDepartureLocationId})`,
          },
        },
        timelineTitle: {
          localTime: idx(inbound, _ => _.departure.localTime),
          iataCode: inboundDepartureLocationId,
        },
      };
      this.props.actions.addWarningData(warning);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Timeline data={this.props.data.outbound} />
        <Timeline data={this.props.data.inbound} />
      </React.Fragment>
    );
  }
}

type PropsWithContext = {|
  +data: ReturnTimelineType,
|};

function MulticityTimelineWithContext(props: PropsWithContext) {
  return (
    <TripOverviewContext.Consumer>
      {context => <ReturnTimeline data={props.data} {...context} />}
    </TripOverviewContext.Consumer>
  );
}

export default createFragmentContainer(
  MulticityTimelineWithContext,
  graphql`
    fragment ReturnTimeline on BookingReturn {
      outbound {
        ...Timeline
        departure {
          localTime
          airport {
            locationId
            city {
              name
            }
          }
        }
        arrival {
          localTime
          airport {
            locationId
            city {
              name
            }
          }
        }
      }
      inbound {
        ...Timeline
        departure {
          localTime
          airport {
            locationId
            city {
              name
            }
          }
        }
        arrival {
          localTime
          airport {
            locationId
            city {
              name
            }
          }
        }
      }
    }
  `,
);
